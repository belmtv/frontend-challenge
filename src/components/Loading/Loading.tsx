import { ProgressBar } from 'react-loader-spinner'

type LoadingProps = {
    classes?: string
}

export const Loading = ({ classes }: LoadingProps) => {
    return (
        <div
            style={{
                margin: '0 auto',
                position: 'absolute',
                top: '50%',
                left: '50%',
            }}
        >
            <ProgressBar
                visible={true}
                height="80"
                width="80"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}
