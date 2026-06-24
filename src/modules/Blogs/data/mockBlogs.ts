export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  readTime: string;
}

export const mockBlogs: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Smart Lighting: Beyond Just Bulbs",
    excerpt: "Discover how intelligent lighting systems are evolving to enhance mood, improve sleep cycles, and drastically reduce energy consumption in modern homes.",
    author: "Elena Rodriguez",
    date: "Jun 12, 2026",
    category: "Lighting",
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Securing Your Connected Home: A Comprehensive Guide",
    excerpt: "With the rise of IoT devices, securing your home network is more critical than ever. Learn the top strategies to keep your smart home safe from cyber threats.",
    author: "David Chen",
    date: "May 28, 2026",
    category: "Security",
    imageUrl: "https://images.unsplash.com/photo-1558002038-bf1dfeb33965?q=80&w=2070&auto=format&fit=crop",
    readTime: "8 min read",
  },
  {
    id: "3",
    title: "Automating Your Morning Routine: Wake Up to Perfection",
    excerpt: "Imagine your house waking up with you. From automated blinds to the perfect brew of coffee waiting for you, see how automation can transform your mornings.",
    author: "Sarah Jenkins",
    date: "May 15, 2026",
    category: "Automation",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
    readTime: "4 min read",
  },
  {
    id: "4",
    title: "Building a Robust Home Network for Seamless Streaming",
    excerpt: "Tired of buffering? Learn how to set up a commercial-grade home Wi-Fi network that handles 4K streaming, gaming, and smart devices without breaking a sweat.",
    author: "Michael Chang",
    date: "Apr 02, 2026",
    category: "Networking",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
    readTime: "6 min read",
  },
  {
    id: "5",
    title: "Voice Control vs. App Control: Finding Your Perfect Balance",
    excerpt: "While voice assistants are convenient, dedicated apps offer granular control. We explore the pros and cons of both and how to integrate them effectively.",
    author: "Elena Rodriguez",
    date: "Mar 18, 2026",
    category: "Automation",
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
    readTime: "7 min read",
  },
  {
    id: "6",
    title: "Aesthetics Meets Technology: Invisible Speakers and Hidden Tech",
    excerpt: "You don't have to sacrifice interior design for high tech. Explore the world of invisible architectural speakers and hidden smart home displays.",
    author: "James Wilson",
    date: "Feb 24, 2026",
    category: "Design",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    readTime: "5 min read",
  }
];
