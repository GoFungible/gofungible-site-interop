

# 1 Way Communication
---

## 1-Way Messages

Fire and Forget

Blockchains are inherently isolated, they cannot independently listen to external networks. Cross-chain message passing is asynchronous, one-way by design using a fire-and-forget pattern. Once a transaction is successfully sent and the MessageBus contract on the source chain emits the message event, the source chain considers its job done. General Message Passing protocols does not automatically notify the sender contract on the source chain if a message fails or is "lost" on the destination chain. 

Most of relayers accept losing messages

<br/>
<div style={{textAlign: 'center'}}>
	<img src="/img/drawings/patterns_messaging_1way.svg" width="100%"></img>
</div>
<br/>

Specially suitable to business operations that can be executed on iterations so retry is a valid use case for this pattern.

Sending to wrong or null destination must be supported by the use case.

This pattern does not support rolling back messages in a consistent way.

Optionally ids can be stored to memorize the transactions done. Optionally pruned.

## 1-Way Idempotent Messages

<br/>
<div style={{textAlign: 'center'}}>
	<img src="/img/drawings/patterns_messaging_1way_idempotent.svg" width="100%"></img>
</div>
<br/>

Can be rolled back with 2 way roll back message.



