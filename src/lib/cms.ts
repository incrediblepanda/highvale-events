import fs from 'fs';
import path from 'path';

export async function getContent(contentPath: string) {
  try {
    const filePath = path.join(process.cwd(), 'content', contentPath);

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.warn(`Content file not found: ${filePath}`);
      return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Error reading content from ${contentPath}:`, error);
    return null;
  }
}

export async function getHomepageContent() {
  const [hero, services, testimonials, faq] = await Promise.all([
    getContent('homepage/hero.json'),
    getContent('homepage/services.json'),
    getContent('homepage/testimonials.json'),
    getContent('homepage/faq.json')
  ]);

  return {
    hero,
    services,
    testimonials,
    faq
  };
}

export async function getPortfolioItems() {
  const portfolioDir = path.join(process.cwd(), 'content', 'portfolio');

  if (!fs.existsSync(portfolioDir)) {
    return [];
  }

  const files = fs.readdirSync(portfolioDir);
  const items = [];

  for (const file of files) {
    if (file.endsWith('.json')) {
      const content = await getContent(`portfolio/${file}`);
      if (content) {
        items.push(content);
      }
    }
  }

  return items;
}

export async function getTeamMembers() {
  const teamDir = path.join(process.cwd(), 'content', 'team');

  if (!fs.existsSync(teamDir)) {
    return [];
  }

  const files = fs.readdirSync(teamDir);
  const members = [];

  for (const file of files) {
    if (file.endsWith('.json')) {
      const content = await getContent(`team/${file}`);
      if (content) {
        members.push(content);
      }
    }
  }

  return members.sort((a, b) => (a.order || 0) - (b.order || 0));
}

export async function getSettings() {
  return await getContent('settings/general.json');
}
