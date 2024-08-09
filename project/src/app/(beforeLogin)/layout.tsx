import { ReactNode } from "react"

type Props = {
    children: ReactNode,
    modal: ReactNode,
}

export default function Layout({ children, modal }) {
    return (
        <div>
            비포 로그인 레이아웃
            {/* 루트 페이지 */}
            {children}
            {/* 모달 */}
            {modal}
        </div>
    )
}