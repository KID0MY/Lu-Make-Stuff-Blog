import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Lu Makes Stuff',
    description: 'My home in this crazy web',
    // Fallback in case context.site is missing
    site: context.site ?? 'https://lumakesstuff.com', 
    items: await pagesGlobToRssItems(
      import.meta.glob('./posts/*.md') // Specifically target your posts
    ),
    customData: `
      <language>en-us</language>
      <image>
        <url>https://your-website.com/favicon.svg</url>
        <title>Lu Makes Stuff</title>
        <link>https://your-website.com</link>
      </image>
    `,
  });
}