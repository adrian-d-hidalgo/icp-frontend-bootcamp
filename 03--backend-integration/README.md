# ICP Create React App - Backend Integration

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

To get started, follow these steps:

Install frontend dependencies by running the following command in your terminal:

```bash
cd src/frontend
npm install
cd ../..
```

Run a replica of ICP by executing the following command:

```bash
dfx start --background --clean
```

Deploy the Internet Identity canister:

```bash
dfx deploy internet_identity
```

You should see the following output in your terminal:

```bash
Deployed canisters.
URLs:
    Frontend canister via browser
        internet_identity:
            - http://127.0.0.1:4943/?canisterId=bkyz2-fmaaa-aaaaa-qaaaq-cai
            - http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/
    Backend canister via Candid interface:
        internet_identity: http://127.0.0.1:4943/?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai&id=bkyz2-fmaaa-aaaaa-qaaaq-cai
```

Deploy the Backend canister:

```bash
dfx deploy backend
```

Generate declaration files:

```bash
dfx generate backend
```

Copy the `.env-example` file and rename the copy to `.env`

Replace the value of `REACT_APP_INTERNET_COMPUTER_PROVIDER` with the URL obtained from `dfx deploy internet_identity`. For example: `http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/`

Replace the value of `REACT_APP_BACKEND_CANISTER_ID` with the value obtained from `dfx canister id backend`. The value should look like: `ryjl3-tyaaa-aaaaa-aaaba-cai`

Run the application in developer mode:

```bash
npm run start
```

To run the application in production mode, execute the following command:

```bash
dfx deploy frontend
```
