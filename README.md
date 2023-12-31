This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

There are only 3 steps to running this application on your local device.

### First, clone the repository

```bash
git clone https://github.com/chrysocolla110/luhn-credit.git
```

### Second, install package dependencies:
```bash
npm install
# or
npm i
# or
yarn

```

### Third, run the development server:

```bash
npm run start
# or
yarn start
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Finally, you can see the following UI.
<br/>
<img src="./src/utils/Screenshot_1.jpg" alt="Credit Card Checking Form" style="height:200px;"/>
<img src="./src/utils/Screenshot_success.jpg" alt="Credit Card Checking Form-Success" style="height:200px;"/>
<img src="./src/utils/Screenshot_failed.jpg" alt="Credit Card Checking Form-Fail" style="height:200px;"/>

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Back-End (Credit Card Luhn Validation)

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/validation](http://localhost:3000/api/validation). 
This endpoint can be edited in `pages/api/validation.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
