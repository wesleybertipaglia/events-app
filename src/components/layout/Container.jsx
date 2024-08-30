const Container = ({ classList, children }) => {
    return (
        <section className={classList}>
            <div className="container mx-auto px-4">{children}</div>
        </section>
    )
}

export default Container