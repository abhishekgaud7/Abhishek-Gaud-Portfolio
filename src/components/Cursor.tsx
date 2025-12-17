import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Cursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null)
    const followerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const cursor = cursorRef.current
        const follower = followerRef.current

        if (!cursor || !follower) return

        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
            })
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3, // Slightly delayed follow
            })
        }

        const onHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.tagName === 'A' || target.closest('a') || target.tagName === 'BUTTON' || target.closest('button') || target.classList.contains('magnetic')) {
                gsap.to(cursor, { scale: 0, duration: 0.1 }) // Hide dot
                gsap.to(follower, {
                    scale: 2.5,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent fill
                    borderColor: 'rgba(255, 255, 255, 0.8)',
                    duration: 0.3
                })
            } else {
                gsap.to(cursor, { scale: 1, duration: 0.1 })
                gsap.to(follower, {
                    scale: 1,
                    backgroundColor: 'transparent',
                    borderColor: '#fff',
                    duration: 0.3
                })
            }
        }

        // Magnetic effect implementation for .magnetic elements
        const magnetics = document.querySelectorAll('.magnetic')
        magnetics.forEach((el) => {
            const element = el as HTMLElement
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect()
                const x = e.clientX - rect.left - rect.width / 2
                const y = e.clientY - rect.top - rect.height / 2
                gsap.to(element, { x: x * 0.3, y: y * 0.3, duration: 0.3 })
            })
            element.addEventListener('mouseleave', () => {
                gsap.to(element, { x: 0, y: 0, duration: 0.3 })
            })
        })


        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mouseover', onHover)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('mouseover', onHover)
        }
    }, [])

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
            />
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
            />
        </>
    )
}

export default Cursor
