import React from 'react'
import Container from '../layout/Container'

const BaseForm = ({ title, handleSubmit, successMessage, errorMessage, children }) => {
    return (
        <Container classList={"py-5"}>
            <h2>{title}</h2>
            <form onSubmit={handleSubmit} autoComplete="off" className="d-flex flex-column gap-3">
                {children}
            </form>
            {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
            {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
        </Container>
    )
}

export default BaseForm
