# Token subgraph

ERC20 Token subgraph manifest for the Graph protocol.

Please take a look at [Graph protocol](https://github.com/graphprotocol/graph-node) for more information.

### Installation

```bash
$ npm install

# change token address in `subgraph.yaml`

$ npm run codegen
$ npm run build
$ npm run  build-ipfs --verbosity debug > .ipfs.hash
```

### Run graph node

```bash
$ cargo run -p graph-node --release -- \
    --postgres-url postgresql://localhost:5432/token-transfer \
    --ethereum-rpc http://kovan.infura.io/ \
    --ipfs 127.0.0.1:5001 \
    --subgraph <IPFS_HASH from .ipfs.hash>
```

You can open graphiQL UI at http://localhost:8000

### How to query?

```
{
  transferEntities (first: 10) {
    from
    to
    amount
  }
}
```

### License

MIT
