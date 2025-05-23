import { HeadingThree } from "../headingThree/headingThree"

const notices = [
    {
        date: "16 June, 2019",
        color: "info",
        title: "Great School manag mene esom text of the printing.",
        author: "Jennyfar Lopez",
        timeAgo: "5 min ago",
    },
    {
        date: "16 June, 2019",
        color: "warning",
        title: "Great School manag printing.",
        author: "Jennyfar Lopez",
        timeAgo: "5 min ago",
    },
    {
        date: "16 June, 2019",
        color: "danger",
        title: "Great School manag meneesom.",
        author: "Jennyfar Lopez",
        timeAgo: "5 min ago",
    },
];

export const NoticeBoard = () => {
    return (
        <>
            <div className="noticeBoard">
                <div className="card p-3" >
                    <HeadingThree title='Notice Board' />
                    <div className="overflow-auto  pe-2" style={{ maxHeight: "400px",direction: "ltr" }}>
                        {notices.map((notice, index) => (
                            <div key={index} className="mb-4">
                                <span className={`badge bg-${notice.color} mb-2`}>
                                    {notice.date}
                                </span>
                                <h6 className="mb-1">{notice.title}</h6>
                                <small className="text-muted">
                                    {notice.author} / {notice.timeAgo}
                                </small>
                                {index !== notices.length - 1 && <hr />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}