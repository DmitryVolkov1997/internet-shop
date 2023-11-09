import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App.tsx'
import './assets/styles/index.scss'
import { persistor, store } from './store/store.ts'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<PersistGate loading={null} persistor={persistor}>
						<App />
					</PersistGate>
					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
)
