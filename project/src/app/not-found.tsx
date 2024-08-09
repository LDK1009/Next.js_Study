import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

const NotFound: NextPage = () => {
    return (
        <div>
            <div>404 NotFound</div>            
            <div>페이지가 존재하지 않습니다.</div>            
            <Link href="/search">검색</Link>
        </div>
    );
};

export default NotFound;