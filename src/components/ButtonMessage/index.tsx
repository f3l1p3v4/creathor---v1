'use client';

import React from "react";
import Link from 'next/link'

import { FaWhatsapp } from 'react-icons/fa';

import "./styles.css";

export function ButtonMessage() {
  return (
    <Link href="/faleconosco" className="button-message">
      <FaWhatsapp />
    </Link>
  );
}
