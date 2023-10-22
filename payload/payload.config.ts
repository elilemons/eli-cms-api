import path from 'path';
import { buildConfig } from 'payload/config';
import { Icon } from './components/Icon';
import { Logo } from './components/Logo';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { Users } from './collections/Users';

export default buildConfig({
  admin: {
    bundler: webpackBundler(),
    meta: {
      titleSuffix: "- Installmint CMS",
      favicon: "/assets/favicon.svg",
      ogImage: "/assets/logo.svg",
    },
    components: {
      graphics: {
        Logo,
        Icon,
      },
    },
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI as string
  }),
  editor: slateEditor({}),
  collections: [
    Users
    // Your collections here
  ],
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, '../payload-types.ts'),
  },
});
