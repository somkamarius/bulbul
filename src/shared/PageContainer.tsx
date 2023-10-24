type Props = {
    children: JSX.Element[];
}

export function PageContainer({ children }: Props) {
    return (
        <div className="w-screen h-screen p-16 pt-32 mx-auto justify-items-center">
            {children}
        </div>
    )
}