/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
		container: {
      center: true,
			padding: 'var(--space-xs)',
			screens: {
        sm: '80%',
        md: '80%',
        lg: '80%',
        xl: '80%',
        '2xl': '80%'
      },
    },
		colors: {
			background: '#000D00', // Colore di sfondo, quasi nero
			foreground: '#EEEFEC', // Colore del testo principale
			accent: '#04A64B', // Colore dell'accento
			accentlight: '#95C11F',
			accentdark: '#006A3B',
			primary: '#EEEFEC',
			secondary: '#95C11F',
			white: '#ffffff',
			greyshade: '#5e635e',
		},
		spacing: {
			'none': '0px',
			'sm': '1px',
			'md': '2px',
			'xs': 'var(--space-4xs)',      // 2px
			'xsm': 'var(--space-3xs)',     // 4px
			's': 'var(--space-2xs)',       // 8px
			'm': 'var(--space-xs)',        // 10px
			'l': 'var(--space-s)',         // 16px
			'xl': 'var(--space-m)',        // 24px
			'xxl': 'var(--space-l)',       // 32px
			'xxxl': 'var(--space-xl)',     // 52px
			'xxxxl': 'var(--space-2xl)',   // 60px
			'huge': 'var(--space-3xl)',    // 100px
			'giant': 'var(--space-4xl)',   // 200px
			'full': '100vw',
		},
		fontSize: {
			'228': 'var(--text-6xl)',   // 200px (13.879vw)
			'120': 'var(--text-5xl)',    // 120px (8.328vw)
			'64': 'var(--text-4xl)',     // 64px (4.444vw)
			'44': 'var(--text-3xl)',     // 44px (3.053vw)
			'32': 'var(--text-2xl)',     // 32px (2.221vw)
			'24': 'var(--text-xl)',      // 24px (1.666vw)
			'20': 'var(--text-l)',       // 20px (1.388vw)
			'16': 'var(--text-m)',       // 16px (1.11vw)
			'14': 'var(--text-s)',       // 14px (0.972vw)
		},
		fontFamily: {
			'sans': ['gate-a1-variable', 'sans-serif'],
			'body': ['gate-a1-variable', 'sans-serif']
		},
		extend: {
			backgroundImage: {
        'accent-gradient': 'linear-gradient(to left, #04a64b, #95c11f)',
      },
			borderRadius: {
				'none': '0px',
        'sm': '1px',
        'md': '2px',
        'xs': 'var(--space-4xs)',      // 2px
        'xsm': 'var(--space-3xs)',     // 4px
        's': 'var(--space-2xs)',       // 8px
        'm': 'var(--space-xs)',        // 10px
        'll': 'var(--space-s)',         // 16px
        'xl': 'var(--space-m)',        // 24px
        'xxl': 'var(--space-l)',       // 32px
        'xxxl': 'var(--space-xl)',     // 52px
        'xxxxl': 'var(--space-2xl)',   // 60px
        'huge': 'var(--space-3xl)',    // 100px
        'giant': 'var(--space-4xl)',   // 200px
        'full': '100vw',
			},
			transitionTimingFunction: {
				'defaultEase': 'cubic-bezier(0.16, 1, 0.3, 1)',
			}
		},
	},
  plugins: [],
}