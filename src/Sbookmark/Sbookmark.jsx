
const Sbookmark = ({bookmark}) => {
    const {heading}=bookmark;
    return (
        <div className="p-4 text-2xl bg-white rounded-lg my-4 font-semibold">
            <h2>{heading}</h2>
        </div>
    );
};

export default Sbookmark;