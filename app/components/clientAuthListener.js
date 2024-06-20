// app/components/ClientAuthListener.js
'use client';

import useAuthListener from "../hooks/useAuthListener";
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import {useEffect} from 'react'
import { useSessionStore } from "../hooks/useSessionStore";

const ClientAuthListener = () => {
    useAuthListener();
    return null;
  };
  
  export default ClientAuthListener;