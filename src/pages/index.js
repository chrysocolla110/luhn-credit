import { CreditCard } from '@/components/CreditCard';
import { RoadingSpinner } from '@/components/LoadingSpinner';
import { Inter } from 'next/font/google'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [val, setVal] = useState("");
  const [checkStatus, setCheckStatus] = useState(false);

  const checkCreditCardNumber = async ({credit_card_number}) =>
    await fetch("/api/validation", {
      method: "POST",
      body: JSON.stringify({credit_card_number:credit_card_number}),
      headers: {
        "Content-Type": "application/json",
      },
    });

  const onChange = async (e) => {
    if(e.target.value.length<20){
      setVal(e.target.value);
      setCheckStatus(false);
      if(e.target.value.length === 19){
        const response = await checkCreditCardNumber({credit_card_number:e.target.value});
        const cStatus = await response.json();
        setCheckStatus(cStatus.checkStatus);
      }
    }
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="p-8">
        <CreditCard checkStatus={checkStatus} value={val} onChange={onChange}/>
      </div>
    </main>
  )
}
