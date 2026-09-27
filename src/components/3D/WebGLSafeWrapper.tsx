import React, { Component, ErrorInfo, ReactNode, useEffect, useState } from 'react';

interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ThreeErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = { hasError: false };

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('3D WebGL fallback activated:', error.message, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return reduced;
}

export function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

interface WebGLSafeWrapperProps {
  children: ReactNode;
  fallback: ReactNode;
  className?: string;
}

export const WebGLSafeWrapper: React.FC<WebGLSafeWrapperProps> = ({
  children,
  fallback,
  className = '',
}) => {
  const [supported, setSupported] = useState<boolean>(true);

  useEffect(() => {
    setSupported(isWebGLAvailable());
  }, []);

  if (!supported) {
    return <div className={className}>{fallback}</div>;
  }

  return (
    <div className={className}>
      <ThreeErrorBoundary fallback={fallback}>{children}</ThreeErrorBoundary>
    </div>
  );
};
