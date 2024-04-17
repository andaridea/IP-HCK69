export default function LoginPage() {
    return (
        <>
            <div className="relative flex min-h-screen">
                <div className="w-1/2 h-full flex flex-col justify-end items-center">
                    <img
                        className="h-100 w-auto"
                        src="./labuanbajo.jpg"
                        alt="Background Login"
                    />
                </div>
                <div className="w-1/2 bg-slate-50 flex min-h-screen items-center justify-center">
                <div className="sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Continue with Google
                            </button>
                        </div>
                    </form>
                    <div className="border-t-4 mt-8 text-center">
                    <span className="text-sm">
                        By signing in or creating an account, you agree with our <span className="font-bold text-sm">Terms and Conditions</span>
                    </span>
                    </div>
                    <div className="mt-4 text-center">
                    <span className="text-sm">
                        All rights reserved.
                        Copyright 2024 - staycation.com
                    </span>
                    </div>
                </div>
                </div>
                </div>
            </div>

        </>
    )
}