'use client';
import { TinaAdmin } from 'tinacms';
import tinaConfig from '../../../../tina/config'; // <-- correct path given tree

export default function AdminPage() {
  return <TinaAdmin config={tinaConfig} />;
}
