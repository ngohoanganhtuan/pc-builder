import React, { Component, ErrorInfo, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
  errorDetail: Error;
};

export type ErrorBoundaryUIProps = { error: Error };

/**
 * Error Boundary UI only.
 * @param { Error } error - Contains error information
 * @returns { JSX.Element }
 */
export const ErrorBoundaryUI = ({ error }: ErrorBoundaryUIProps): JSX.Element => (
  <div
    className="modal d-block"
    role="dialog"
  >
    <div
      className="modal-dialog shadow"
      role="document"
    >
      <div className="modal-content border-0">
        <div className="modal-header bg-danger text-white">
          <h5 className="modal-title">
            Error <i className="bi bi-emoji-frown"></i>
          </h5>
        </div>
        <div className="modal-body">
          <details>
            <summary>
              <span className="text-danger">{error.name}</span> : {error.message}
            </summary>
            <p className="p-3">
              <small>{error.stack}</small>
            </p>
          </details>
        </div>
      </div>
    </div>
  </div>
);

export class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    errorDetail: {} as Error,
  };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorDetail: error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorBoundaryUI error={this.state.errorDetail} />;
    }

    return this.props.children;
  }
}
