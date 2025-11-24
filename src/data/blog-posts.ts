export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  coverImage: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "automating-trading-dashboard",
    title: "Case Study: Automating a Trading Dashboard",
    excerpt: "How we reduced cognitive load for high-frequency traders using progressive reduction.",
    date: "Aug 02, 2023",
    readTime: "8 min read",
    tags: ["Case Study", "Fintech"],
    coverImage: "bg-gradient-to-br from-slate-800 to-slate-900",
    content: `
      <p>High-frequency trading interfaces are notoriously complex. Our challenge was to simplify the execution flow without hiding critical data.</p>
      
      <h2>The Problem</h2>
      <p>Traders were missing opportunities because the interface was cluttered with secondary metrics.</p>
      
      <h2>The Solution</h2>
      <p>We implemented "Progressive Reduction"—as the user became more expert, the UI became more minimal, relying on shortcuts and muscle memory.</p>
      
      <h3>Outcomes</h3>
      <ul>
        <li>30% faster trade execution</li>
        <li>Zero critical errors in the first month</li>
      </ul>
    `,
  },
];
