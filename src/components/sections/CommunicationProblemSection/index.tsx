import { JSX } from "react";
import SplitSection from "../../basic/splitrow/SplitSection";

import styles from './styles.module.css';
import GenericSection from "../../basic/GenericSection";

export default function CommunicationProblemSection(): JSX.Element {
  return (
    
			<GenericSection
				title="The Liquidity Fragmentation Problem"
				subtitle="Blockchains were not designed to communicate which each other so liquidity is split across the chains."
				variant="secondary"
				padding="large"
				headerSpacing="large"
				headerClassName={styles.heroHeaderContent}
			>

			<SplitSection
				image={{
					src: 'https://stealthex.io/blog/wp-content/uploads/2022/06/%D0%A1ross_chain_bridge-5-min.png',
					alt: 'Another great feature',
					width: 600,
					height: 400
				}}
				content={{
					title: 'Multiple ecosystems',
					titleLevel: 2,
					text: (
						<div>
							<p>Multiple ecosystems.</p>
						</div>
					)
				}}
				reverse={false}
				spacing="large"
			/>

			</GenericSection>

  );
}