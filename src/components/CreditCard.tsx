
import {BiCheckShield, BiSolidShieldX} from 'react-icons/bi'
import { LoadingPlus } from './LoadingPlus'
interface props {
    checkStatus: boolean;
    value: string;
    onChange: React.SetStateAction<string>;
}
export const CreditCard = ({ checkStatus, value, onChange }:props) => {

    const ccFormat = (value) => {
        const v = value
            .replace(/\s+/g, "")
            .replace(/[^0-9]/gi, "")
            .substr(0, 16);
        const parts = [];
      
        for (let i = 0; i < v.length; i += 4) {
            parts.push(v.substr(i, 4));
        }
      
        return parts.length > 1 ? parts.join(" ") : value;
    }

    return (
        <div className="rounded-2xl overflow-hidden shadow-lg">
            <div
                className="flex justify-center p-10 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
            >
                <div
                    className="w-64 h-40 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 rounded-lg shadow-lg"
                >
                    <div className="flex justify-between m-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="34"
                            height="34"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#ffffff"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="3" y="5" width="18" height="14" rx="3" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                            <line x1="7" y1="15" x2="7.01" y2="15" />
                            <line x1="11" y1="15" x2="13" y2="15" />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="34"
                            height="34"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#ffffff"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="9.5" cy="9.5" r="5.5" fill="#fff" />
                            <circle cx="14.5" cy="14.5" r="5.5" />
                        </svg>
                    </div>
                    <div className="flex justify-center mt-4">
                        <input
                            className='text-center'
                            type="text"
                            autoFocus
                            placeholder="XXXX XXXX XXXX 1234"
                            value={ccFormat(value)}
                            onChange={onChange}
                        />
                    </div>
                    <div className="flex justify-center p-4 text-gray-400 font-quick">
                        {
                            value.length<19?
                                <h4 className='capitalize'>Insert credit card number</h4>
                                :checkStatus?
                                    <LoadingPlus><BiCheckShield className='text-sky-400' size={40}/></LoadingPlus>
                                    :<LoadingPlus><BiSolidShieldX className='text-red-500' size={40}/></LoadingPlus>
                        }
                        
                    </div>
                </div>
            </div>
            <div className="text-center mt-8 mb-2 font-quick">
                <h1 className="font-black text-gray-700 tracking-wide text-xl">
                    Banks are supported
                </h1>
                <p className="font-bold text-gray-500">By Luhn Algorithm</p>
            </div>
        </div>
    );
}