// Respond to application white listed events
export function tokenTransferred(event: Transfer): void {
  // Create application entity
  let transferEntity = new Entity();
  transferEntity.setAddress("from", event.params._from);
  transferEntity.setAddress("to", event.params._to);
  transferEntity.setU256("amount", event.params._value);

  // Apply store updates (insert or update if entity already exists)
  store.set(
    event.blockHash,
    "TransferEntity",
    `Transfer:${event.blockHash}:${event.address}`,
    transferEntity
  );
}

// Respond to application white listed events
export function tokenApproved(event: Approval): void {
  // Create application entity
  let approvalEntity = new Entity();
  approvalEntity.setAddress("owner", event.params._owner);
  approvalEntity.setAddress("spender", event.params._spender);
  approvalEntity.setU256("amount", event.params._value);

  // Apply store updates (insert or update if entity already exists)
  store.set(
    event.blockHash,
    "ApprovalEntity",
    `Approval:${event.blockHash}:${event.address}`,
    approvalEntity
  );
}
