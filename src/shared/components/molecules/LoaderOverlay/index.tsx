import React, { Fragment } from "react"
import { Dialog as HDialog, Transition } from "@headlessui/react"

interface LoaderOverlayProps {
    isLoading: boolean
}

export const LoaderOverlay = ({ isLoading }: LoaderOverlayProps) => {
    return (
        <Transition appear show={isLoading} as={Fragment}>
            <HDialog
                onClose={() => {
                    return
                }}
                as="div"
                className="relative z-50">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <div className="fixed inset-0 flex items-center bg-black bg-opacity-60 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95">
                            <HDialog.Panel
                                className={
                                    "flex h-32 w-32 items-center justify-center rounded-lg bg-white"
                                }>
                                <div
                                    className={
                                        "h-14 w-14 animate-spin rounded-full border-2 border-orange-400 border-b-transparent"
                                    }
                                />
                            </HDialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </HDialog>
        </Transition>
    )
}
