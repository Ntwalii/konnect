import React from "react";

export default function Footer(){
    return (
        <div className="flex flex-row bg-customGreen text-white py-10 px-20">
            <ul className="w-1/4 flex flex-col gap-5">
                <li className="font-semibold text-3xl">Services</li>
                <ul className="flex flex-col gap-3">
                <li>Tutoring</li>
                <li>Tutoring</li>
                <li>Tutoring</li>
                </ul>
            </ul>
            <ul className="w-1/4 flex flex-col gap-5">
                <li className="font-semibold text-3xl">Services</li>
                <ul className="flex flex-col gap-3">
                <li>Tutoring</li>
                <li>Tutoring</li>
                <li>Tutoring</li>
                </ul>
            </ul>
            <ul className="w-1/4 flex flex-col gap-5">
                <li className="font-semibold text-3xl">Services</li>
                <ul className="flex flex-col gap-3">
                <li>Tutoring</li>
                <li>Tutoring</li>
                <li>Tutoring</li>
                </ul>
            </ul>
            <div className="w-1/4">
                <img src="./assets/logo-white.png" className="mx-auto" alt="" />
                <p className="text-center">©2024 Konnect</p>
            </div>
        </div>
    )
}