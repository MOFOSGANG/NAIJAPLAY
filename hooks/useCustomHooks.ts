import { useState, useEffect } from 'react';
import { Socket } from 'socket.io-client';
import { getSocket } from '../socketService';

/**
 * Custom hook for managing socket event listeners
 * Automatically handles cleanup on unmount
 */
export function useSocketEvent<T = any>(
    eventName: string,
    handler: (data: T) => void,
    dependencies: any[] = []
) {
    useEffect(() => {
        const socket = getSocket();
        if (!socket) return;

        socket.on(eventName, handler);

        return () => {
            socket.off(eventName, handler);
        };
    }, [eventName, ...dependencies]);
}

/**
 * Custom hook for setInterval with automatic cleanup
 */
export function useInterval(callback: () => void, delay: number | null) {
    useEffect(() => {
        if (delay === null) return;

        const interval = setInterval(callback, delay);
        return () => clearInterval(interval);
    }, [callback, delay]);
}

/**
 * Custom hook for debounced value
 */
export function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

/**
 * Custom hook for previous value tracking
 */
export function usePrevious<T>(value: T): T | undefined {
    const [previous, setPrevious] = useState<T>();

    useEffect(() => {
        setPrevious(value);
    }, [value]);

    return previous;
}
