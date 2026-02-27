import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html'
    }),

    paths: {
      base: dev ? '' : '/amas'
    }
  }
};

export default config;