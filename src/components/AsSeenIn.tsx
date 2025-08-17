'use client';

export default function AsSeenIn() {
  const logos = [
    { name: 'Zola', text: 'ZOLA' },
    { name: 'The Knot', text: 'THE KNOT' },
    { name: 'Best of Colorado Springs', text: 'BEST OF COLORADO SPRINGS' },
    { name: 'Zola', text: 'ZOLA' }, // Duplicate for seamless loop
    { name: 'The Knot', text: 'THE KNOT' },
    { name: 'Best of Colorado Springs', text: 'BEST OF COLORADO SPRINGS' },
  ];

  return (
    <section className="py-16 bg-white border-t border-sage/10">
      <div className="max-w-[1180px] mx-auto px-6">
        <h3 className="text-center text-2xl font-cormorant font-semibold text-sage mb-10">
          As Seen In
        </h3>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center mx-12 min-w-[200px]"
              >
                <div className="text-sage/60 font-inter font-medium text-lg tracking-wider">
                  {logo.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
