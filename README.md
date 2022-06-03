# Ledger Connect demo using web3-react

## Test

Until the Ledger Connect web3-react connector package is publicly released on
NPM, test it locally following the steps below.

1. clone the web3-react-ledgerconnect-connector package repository locally

        git clone git@github.com:hlopes-ledger/web3-react-ledgerconnect-connector.git

1. build and link web3-react-ledgerconnect-connector

        cd web3-react-ledgerconnect-connector
        yarn && yarn build && yarn link
        cd ..

1. clone the demo repository localy

        git clone git@github.com:hlopes-ledger/web3-react-ledgerconnect-demo.git

1. link and run the demo

        cd web3-react-ledgerconnect-demo
        yarn link @ledgerhq/web3-react-ledgerconnect-connector
        yarn start

1. access http://{ip-address}:{port} on your iPhone using Safari and make
  sure to enable the Ledger Connect Safari extension and allow it for that
  URL


