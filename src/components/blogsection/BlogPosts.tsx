import BlogCard from "./Blogcard";

export const BlogSection = () => {
   
    const blogPosts = [
        {
          id: '1',
          image: '/coffee-cup.png',
          title: 'Going all-in with millennial design',
          readTime: '5 min',
          date: '12th Oct 2022'
        },
        {
            id: '2',
            image: '/laptop.png',
            title: 'Going all-in with millennial design',
            readTime: '5 min',
            date: '12th Oct 2022'
          },

          {
            id: '3',
            image: '/lap-desk.png',
            title: 'Going all-in with millennial design',
            readTime: '5 min',
            date: '12th Oct 2022'
          },
        // ... more posts
      ];

    return (
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Our Blogs</h2>
          <p className="text-gray-600">Find a bright idea to suit your taste with our great selection</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-6 py-2 border-b-2 border-black hover:border-gray-600 transition-colors">
            View All Post
          </button>
        </div>
      </section>
    );
  };