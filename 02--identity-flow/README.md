# ICP Create React App - Authentication Flow

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

Install dependencies:

```bash
npm install
```

Run a replica of ICP:

```bash
dfx start --background --clean
```

Deploy the Internet Identity canister:

```bash
dfx deploy internet_identity
```

There should be an output in the terminal like the following:

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

Copy `src/frontend/.env-example` and rename the copy to `src/frontend/.env`

Replace the value of `REACT_APP_INTERNET_COMPUTER_PROVIDER` with the URL obtained from `dfx deploy internet_identity`, for example: `http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/`

Run developer mode:

```bash
cd src/frontend
npm run start
```

Run production mode:

```bash
dfx deploy frontend
```
