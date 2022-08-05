import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  promiseRejectionHandler = (event) => {
    this.setState({
      hasError: true,
      error: event.reason,
    });
  };

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }
  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
  }
  componentDidMount() {
    window.addEventListener("unhandledrejection", this.promiseRejectionHandler);
  }
  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.promiseRejectionHandler
    );
  }

  render() {
    if (this.state.hasError) {
      let errorMessage = "An error occurred";
      let errorName = "Error";
      if (this.state.error !== null) {
        errorMessage = this.state.error.message;
        errorName = this.state.error.name;
      }

      return (
        <div className="ErrorBoundary">
          <h1>An Error Occurred</h1>
          <h2>{errorName}</h2>
          <p>{errorMessage}</p>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false, error: null })}
          >
            Try again?
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
