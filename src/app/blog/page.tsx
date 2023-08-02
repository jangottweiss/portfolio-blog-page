import { getAllPosts } from "@/lib/blogApi";


export default function Blog() {
    const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

    return (
        <div className="">
            <main>
                <h1 className="">All Posts</h1>                
                <div className="">
                    {posts.map((post) => (
                        <div key={post.slug}>
                            {post.slug}
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}