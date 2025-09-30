import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export default async function generateSitemap(req, res) {
  // An array of all pages in your site
  const pages = [
    { url: '/', changefreq: 'daily', priority: 1 },
    { url: '/portfolio', changefreq: 'weekly', priority: 0.8 },
    { url: '/projects', changefreq: 'weekly', priority: 0.8 },
    { url: '/resume', changefreq: 'monthly', priority: 0.7 },
    { url: '/contactus', changefreq: 'monthly', priority: 0.6 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({
    hostname: `https://${req.headers.host}`,
  });

  res.writeHead(200, {
    'Content-Type': 'application/xml',
  });

  const xmlString = await streamToPromise(
    Readable.from(pages).pipe(stream)
  ).then((data) => data.toString());

  res.write(xmlString);
  res.end();
}