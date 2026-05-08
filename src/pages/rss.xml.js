import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Lu Makes Stuff',
    description: 'My home in this crazy web',
    site: context.site ?? 'https://lumakestuff.dev',
    items: await pagesGlobToRssItems(
      import.meta.glob('./posts/**/*.md')  // ← ** catches subfolders
    ),
    customData: `
      <language>en-us</language>
      <image>
        <url>https://lumakestuff.dev/favicon.svg</url>
        <title>Lu Makes Stuff</title>
        <link>https://lumakestuff.dev</link>
      </image>
    `,
  });
}