import { connect } from "react-redux";

const NotFound = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mt-9">404 Page Not Found</h1>
            <h2 className="text-2xl font-bold mt-9">Sorry, that page does not exist!</h2>
        </div>
    );
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(NotFound);