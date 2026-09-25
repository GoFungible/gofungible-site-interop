

# 2 Way Communication
---

## 2-Way Messages

Async Callback

fungible standard needs to be designed for failure to guarantee consistency and decentralation

Fungible Standard features a custom crosschain message implementation as shown below.

<br/>
<div style={{textAlign: 'center'}}>
	<img src="/img/drawings/patterns_messaging_2way.svg" width="100%"></img>
</div>
<br/>

Description

Specially suitable to business operations that can be executed on iterations so retry is a valid use case for this pattern but sender needs guarantee of destination execution.
This pattern does not support rolling back messages in a consistent way.


## 2-Way Idempotent Messages


<br/>
<div style={{textAlign: 'center'}}>
	<img src="/img/drawings/patterns_messaging_2way_idempotent.svg" width="100%"></img>
</div>
<br/>

Description:
* Storing Sent Message Data
* Storing Received Message Data
* Idempotent Messaging

This pattern allows retrying a message

This pattern allows rolling back a message