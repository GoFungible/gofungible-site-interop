import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import BackgroundImageHeader from '../components/headers/BackgroundImageHeader';
import CommunicationProblemSection from '../components/sections/CommunicationProblemSection';
import InteropPatternsSection from '../components/sections/InteropPatternsSection';
import CommunicationWorkaroundSection from '../components/sections/CommunicationWorkaroundSection';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`ERC-7786 Adapters - ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">

			<BackgroundImageHeader
        backgroundImage="https://scx2.b-cdn.net/gfx/news/hires/2013/subarcticlak.jpg"
        title="Cross-chain Contract Interoperability"
        subtitle="Implementation of ERC-7786 Adapters"
        textSide="right"
        overlayOpacity={0.4}
      />

			<main>
				<CommunicationProblemSection />
				<CommunicationWorkaroundSection />
				<InteropPatternsSection />
      </main>

    </Layout>
  );
}
