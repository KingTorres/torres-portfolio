import { useState, useEffect } from "react"
export function useOrientation() {
    type OrientationType = 'landscape' | 'portrait'
    const [orientation, setOrientation] = useState<OrientationType>('portrait')

    useEffect(() => {
        const checkOrientation = () => {
            if (typeof window !== 'undefined') {
                if (window.screen?.orientation) {
                    const isLandscape = window.screen.orientation.type.startsWith('landscape')
                    setOrientation(isLandscape ? 'landscape' : 'portrait')
                } else {
                    // Fallback for Safari/Older browsers
                    setOrientation(window.innerWidth > window.innerHeight ? 'landscape' : 'portrait')
                }
            }
        }

        // Run immediately on load
        checkOrientation()

        // Set up listeners (Fixed the function execution here)
        const handleResize = () => checkOrientation()
        
        window.addEventListener('resize', handleResize)
        window.screen?.orientation?.addEventListener('change', handleResize)

        // Cleanup listeners (Fixed optional chaining here)
        return () => {
            window.removeEventListener('resize', handleResize)
            window.screen?.orientation?.removeEventListener('change', handleResize)
        }
    }, []) // Empty array means this sets up ONCE when the component loads
    return orientation
}