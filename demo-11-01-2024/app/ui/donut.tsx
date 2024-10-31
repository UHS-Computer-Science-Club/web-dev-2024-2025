import { useState, useEffect } from "react";

export default function Donut() {

    const [display, setDisplay] = useState('');

    useEffect(() => {
        const width = 130;  // Increase from 80 to 160 for higher horizontal resolution
        const height = 44;  // Increase from 22 to 44 for higher vertical resolution
        const bufferSize = width * height;
        const zBufferSize = bufferSize * 4;

        const z = new Array(zBufferSize).fill(0);
        let a = 0, e = 1, c = 1, d = 0, f, g, h, G, H, A, t, D;
        const b = new Array(bufferSize).fill(" ");
        const characters = ".,-~:;=!*#$@";

        const R = (t: number, x: number, y: number) => {
            f = x;
            x -= t * y;
            y += t * f;
            f = (3 - x * x - y * y) / 2;
            x *= f;
            y *= f;
            return { x, y };
        };

        const renderFrame = () => {
            b.fill(" ");
            z.fill(0);

            g = 0;
            h = 1;

            for (let j = 0; j < 90; j++) {
                G = 0;
                H = 1;
                for (let i = 0; i < 628; i++) { // Increased loop iterations for finer resolution
                    A = h + 2;
                    D = 1 / (G * A * a + g * e + 5);
                    t = G * A * e - g * a;
                    let x = Math.floor(width / 2 + width / 3 * D * (H * A * d - t * c));
                    let y = Math.floor(height / 2 + height / 2 * D * (H * A * c + t * d));
                    let o = x + width * y;
                    let N = Math.floor(8 * ((g * a - G * h * e) * d - G * h * a - g * e - H * h * c));

                    if (y < height && y >= 0 && x >= 0 && x < width && D > z[o]) {
                        z[o] = D;
                        b[o] = characters[Math.max(N, 0)] || " ";
                    }
                    ({ x: H, y: G } = R(0.02, H, G));
                }
                ({ x: h, y: g } = R(0.07, h, g));
            }

            let output = "";
            for (let k = 0; k < bufferSize; k++) {
                output += k % width ? b[k] : "\n";
            }
            setDisplay(output);

            ({ x: e, y: a } = R(0.04, e, a));
            ({ x: d, y: c } = R(0.02, d, c));
        };

        const intervalId = setInterval(renderFrame, 15); // 30ms for smoother animation

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (<>
        <div className="whitespace-pre font-mono leading-tight bg-black text-white flex items-center justify-center h-[55vh] w-[50vw] rounded-lg">{display}</div>
    </>)

}
