
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug } from "@/lib/blogApi";
import markdownToHtml from "@/lib/markdownToHtml";
import TestComponent from "@/components/testComponent";
import ImageComponent from '@/components/imageComponent';
import Image from 'next/image'

const components = { TestComponent, ImageComponent };

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, ["title", "author", "content"]);

  const content = await markdownToHtml(post.content || "");

  return (
    <div className="container mx-auto">
      <main>
        <div className="w-full h-16">
          <p className="text-2xl">{post.title}</p>
          <p className="text-gray-400">{post.author}</p>
          <MDXRemote source={post.content} components={components}></MDXRemote>
          {/* <div */}
          {/* // className={markdownStyles["markdown"]}
            // dangerouslySetInnerHTML={{ __html: content }} */}
          {/* <MDXRemote source={.content}/> */}
        </div>
      </main>
    </div>
  );
}