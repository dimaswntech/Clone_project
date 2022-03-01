<template>
    <!-- <Navbar1 /> -->
    <!-- <SearchBar /> -->
    <div class="application-main">
        <main class="main">
            <div class="sticky top-0 mt-6 hidden md:block w-full border-b-2">
                <div class="container-xl px-4 md:px-6 lg:px-8">
                    <div
                        class="
                            Layout
                            Layout--flowRow-until-md
                            Layout--sidebarPosition-start
                            Layout--sidebarPosition-flowRow-start
                        "
                    >
                        <div class="Layout-sidebar">
                            <div class="user-profile-sticky-bar">
                                <div class="user-profile-mini-vcard">
                                    <span
                                        class="
                                            w-8
                                            table-cell
                                            align-middle
                                            lh-condensed-ultra
                                            pr-2
                                        "
                                    >
                                        <img
                                            class="rounded-2 rounded-full"
                                            src="https://avatars.githubusercontent.com/u/67653363?s=64&amp;v=4"
                                            width="32"
                                            height="32"
                                            alt="@dimaswntech"
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="Layout-main">
                            <div
                                class="
                                    UnderlineNav
                                    w-full
                                    shadow-none
                                    md:overflow-x-hidden
                                "
                            >
                                <nav class="flex w-full px-4">
                                    <router-link
                                        to="/"
                                        class="UnderlineNav-item"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="
                                                octicon octicon-book
                                                UnderlineNav-octicon
                                                hide-sm
                                            "
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"
                                            ></path>
                                        </svg>
                                        Overview
                                    </router-link>
                                    <router-link
                                        to="/repo"
                                        class="UnderlineNav-item"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="
                                                octicon octicon-repo
                                                UnderlineNav-octicon
                                                hide-sm
                                            "
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                                            ></path>
                                        </svg>
                                        Repositories
                                        <span class="Counter">30</span>
                                    </router-link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-xl px-4 md:px-6 lg:px-8">
                <div
                    class="
                        Layout
                        Layout--flowRow-until-md
                        Layout--sidebarPosition-start
                        Layout--sidebarPosition-flowRow-start
                    "
                >
                    <div class="Layout-sidebar">
                        <div class="h-card md:-mt-8">
                            <div
                                class="user-profile-sticky-bar hidden md:block"
                            >
                                <div class="user-profile-mini-vcard table">
                                    <span
                                        class="
                                            user-profile-mini-avatar
                                            table-cell
                                            align-middle
                                            lh-condensed-ultra
                                            pr-2
                                        "
                                    >
                                        <img
                                            class="rounded-2 avatar-user"
                                            src="https://avatars.githubusercontent.com/u/67653363?s=64&amp;v=4"
                                            width="32"
                                            height="32"
                                            alt="@dimaswntech"
                                        />
                                    </span>
                                    <span
                                        class="
                                            table-cell
                                            align-middle
                                            lh-condensed
                                        "
                                    >
                                        <strong>dimaswntech</strong>
                                    </span>
                                </div>
                            </div>
                            <div class="js-profile-editable-replace">
                                <div
                                    class="
                                        clearfix
                                        flex
                                        md:block
                                        items-center
                                        mb-6
                                        md:mb-0
                                    "
                                >
                                    <div
                                        class="
                                            relative
                                            inline-block
                                            grid-cols-2
                                            md:grid-cols-12
                                            mr-4
                                            md:mr-0
                                            shrink-0
                                        "
                                    >
                                        <router-link
                                            to=""
                                            class="
                                                tooltipped tooltipped-s
                                                d-block
                                            "
                                        >
                                            <img
                                                style="height: auto"
                                                alt=""
                                                width="260"
                                                height="260"
                                                class="
                                                    avatar avatar-user
                                                    w-full
                                                    border
                                                    bg-white
                                                "
                                                src="https://avatars.githubusercontent.com/u/67653363?v=4"
                                            />
                                        </router-link>
                                        <div
                                            class="
                                                vcard-names-container
                                                float-left
                                                js-profile-editable-names
                                                columns-12
                                                py-4
                                                js-sticky
                                                js-user-profile-sticky-fields
                                            "
                                        >
                                            <h1 class="vcard-names">
                                                <span
                                                    class="
                                                        p-name
                                                        vcard-fullname
                                                        block
                                                        overflow-hidden
                                                    "
                                                >
                                                </span>
                                                <span
                                                    class="
                                                        p-nickname
                                                        vcard-username
                                                        block
                                                    "
                                                >
                                                    dimaswntech
                                                </span>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col">
                                    <div
                                        v-if="editView === true"
                                        class="order-1 md:order-none"
                                    >
                                        <div
                                            class="flex lg:flex-row md:flex-col"
                                        ></div>
                                        <form
                                            action=""
                                            class="
                                                relative
                                                flex-auto
                                                js-profile-editable-form
                                            "
                                        >
                                            <div class="mb-1 mb-2">
                                                <label
                                                    for="user_profile_name"
                                                    class="
                                                        block
                                                        mb-1
                                                        font-semibold
                                                    "
                                                    >Name</label
                                                >
                                                <input
                                                    type="text"
                                                    class="w-full form-control"
                                                    placeholder="Name"
                                                />
                                            </div>
                                            <div
                                                class="
                                                    js-length-limited-input-container
                                                "
                                            >
                                                <label
                                                    for="user_profile_bio"
                                                    class="
                                                        block
                                                        font-semibold
                                                        mb-1
                                                    "
                                                    >Bio</label
                                                >
                                                <text-expander>
                                                    <textarea
                                                        name=""
                                                        id=""
                                                        data-input-max-length="160"
                                                        rows="3"
                                                        class="
                                                            form-control
                                                            js-length-limited-input
                                                            mb-1
                                                            w-full
                                                            js-user-profile-bio-edit
                                                        "
                                                        placeholder="Add a bio"
                                                    >
                                                    </textarea>
                                                </text-expander>
                                                <p class="note">
                                                    You can
                                                    <strong>@mention</strong>
                                                    other users and
                                                    organizations to link to
                                                    them.
                                                </p>
                                            </div>
                                            <div
                                                class="
                                                    color-fg-muted
                                                    mt-2
                                                    flex
                                                    items-center
                                                "
                                            >
                                                <svg
                                                    style="width: 16px"
                                                    aria-hidden="true"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    version="1.1"
                                                    width="16"
                                                    data-view-component="true"
                                                    class="
                                                        octicon
                                                        octicon-organization
                                                    "
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"
                                                    ></path>
                                                </svg>
                                                <input
                                                    type="text"
                                                    class="
                                                        ml-2
                                                        form-control
                                                        flex-auto
                                                        input-sm
                                                    "
                                                    placeholder="Company"
                                                />
                                            </div>
                                            <div
                                                class="
                                                    color-fg-muted
                                                    mt-2
                                                    flex
                                                    items-center
                                                "
                                            >
                                                <svg
                                                    style="width: 16px"
                                                    aria-hidden="true"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    version="1.1"
                                                    width="16"
                                                    data-view-component="true"
                                                    class="
                                                        octicon octicon-location
                                                    "
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                                                    ></path>
                                                </svg>
                                                <input
                                                    type="text"
                                                    class="
                                                        ml-2
                                                        form-control
                                                        flex-auto
                                                        input-sm
                                                    "
                                                    placeholder="Location"
                                                />
                                            </div>
                                            <div
                                                class="
                                                    color-fg-muted
                                                    mt-2
                                                    flex
                                                    items-center
                                                "
                                            >
                                                <svg
                                                    style="width: 16px"
                                                    aria-hidden="true"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    version="1.1"
                                                    width="16"
                                                    data-view-component="true"
                                                    class="octicon octicon-link"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                                                    ></path>
                                                </svg>
                                                <input
                                                    type="text"
                                                    class="
                                                        ml-2
                                                        form-control
                                                        flex-auto
                                                        input-sm
                                                    "
                                                    placeholder="Website"
                                                />
                                            </div>
                                            <div
                                                class="
                                                    color-fg-muted
                                                    mt-2
                                                    flex
                                                    items-center
                                                "
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 273.5 222.3"
                                                    height="16"
                                                    width="16"
                                                >
                                                    <title>Twitter</title>
                                                    <path
                                                        d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1"
                                                        fill="currentColor"
                                                    ></path>
                                                </svg>
                                                <input
                                                    type="text"
                                                    class="
                                                        ml-2
                                                        form-control
                                                        flex-auto
                                                        input-sm
                                                    "
                                                    placeholder="Twitter username"
                                                />
                                            </div>
                                            <div class="my-4">
                                                <div
                                                    class="
                                                        js-profile-editable-error
                                                        color-fg-danger
                                                        my-3
                                                    "
                                                ></div>
                                                <button
                                                    class="
                                                        btn-primary btn-sm btn
                                                        mr-2
                                                    "
                                                >
                                                    Save
                                                </button>
                                                <button
                                                    class="
                                                        js-profile-editable-cancel
                                                        btn-sm btn
                                                    "
                                                    @click="
                                                        editView = !editView
                                                    "
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div
                                        v-if="editView === false"
                                        class="flex flex-col md:block"
                                    >
                                        <div class="mb-4">
                                            <button
                                                @click="editView = !editView"
                                                class="btn btn-block"
                                            >
                                                Edit profile
                                            </button>
                                        </div>
                                        <div
                                            class="
                                                order-1
                                                md:order-none
                                                mt-2
                                                md:mt-0
                                            "
                                        >
                                            <div class="mb-4">
                                                <router-link
                                                    to="#"
                                                    class="
                                                        Link--secondary
                                                        no-underline no-wrap
                                                        text-sm
                                                    "
                                                >
                                                    <svg
                                                        text="muted"
                                                        aria-hidden="true"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        version="1.1"
                                                        width="16"
                                                        data-view-component="true"
                                                        class="
                                                            octicon
                                                            octicon-people
                                                        "
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
                                                        ></path>
                                                    </svg>
                                                    <span
                                                        class="
                                                            font-normal
                                                            color-fg-default
                                                        "
                                                        >1</span
                                                    >
                                                    follower
                                                </router-link>
                                                .
                                                <router-link
                                                    to="#"
                                                    class="
                                                        Link--secondary
                                                        text-sm
                                                        no-underline no-wrap
                                                    "
                                                >
                                                    <span
                                                        class="
                                                            text-bold
                                                            color-fg-default
                                                        "
                                                        >1</span
                                                    >
                                                    following
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="Layout-main">
                        <div
                            class="
                                UnderlineNav
                                user-profile-nav
                                block
                                md:hidden
                                sticky
                                top-0
                                pl-4
                                -ml-4
                            "
                        ></div>
                        <div>
                            <div class="relative">
                                <router-view></router-view>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    <footer class="footer w-full container-xl p-responsive">
        <div
            class="
                relative
                flex
                items-center
                pd-2
                text-sm
                color-fg-muted
                border-t
                color-border-muted
                flex-col-reverse
                lg:flex-row
                flex-wrap
                lg:flex-nowrap
                mt-10
                pt-10
            "
        >
            <ul
                class="
                    list-none
                    flex flex-wrap
                    col-0 col-lg-2
                    justify-start
                    lg:justify-between
                    mb-2
                    lg:mb-0
                "
            >
                <li class="mt-2 lg:mt-0 flex items-center">
                    <router-link to="" class="footer-octicon mr-2">
                        <svg
                            aria-hidden="true"
                            height="24"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="24"
                            data-view-component="true"
                            class="octicon octicon-mark-github"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                            ></path>
                        </svg>
                        <span> © 2022 GitHub, Inc. </span>
                    </router-link>
                </li>
            </ul>
            <ul
                class="
                    list-none
                    flex flex-wrap
                    col-12 col-lg-8
                    justify-center
                    lg:justify-between
                    mb-2
                    lg:first-letter:mb-0
                "
            >
                <li class="mr-4 lg:mr-0">
                    <router-link to="" class="link-footer">Terms</router-link>
                </li>
                <li class="mr-4 lg:mr-0">
                    <router-link to="" class="link-footer">Privacy</router-link>
                </li>
                <li class="mr-4 lg:mr-0">
                    <router-link to="" class="link-footer"
                        >Security</router-link
                    >
                </li>
                <li class="mr-4 lg:mr-0">
                    <router-link to="" class="link-footer">Status</router-link>
                </li>
                <li class="mr-4 lg:mr-0">
                    <router-link to="" class="link-footer">Docs</router-link>
                </li>
                <li class="mr-4 lg:mr-0">
                    <router-link to="" class="link-footer"
                        >Contact Github</router-link
                    >
                </li>
                <li class="mr-4 lg:mr-0">
                    <router-link to="" class="link-footer">Pricing</router-link>
                </li>
                <li class="mr-4 lg:mr-0">
                    <router-link to="" class="link-footer">API</router-link>
                </li>
                <li class="mr-4 lg:mr-0">
                    <router-link to="" class="link-footer"
                        >Training</router-link
                    >
                </li>
                <li class="mr-4 lg:mr-0">
                    <router-link to="" class="link-footer">Blog</router-link>
                </li>
                <li>
                    <router-link to="" class="link-footer">About</router-link>
                </li>
            </ul>
        </div>
        <div class="flex justify-center pb-10">
            <span class="text-sm color-fg-muted"></span>
        </div>
    </footer>
</template>
<script>
// import Navbar1 from '../components/Navbar1.vue'
// import SearchBar from '../components/SearchBar.vue'
import { ref, computed } from 'vue'
import axios from 'axios'

export default {
    // components: {
    //     Navbar1,
    //     // SearchBar,
    // },
    setup() {
        const repos = ref([])
        const editView = ref(false)

        axios
            .get('https://api.github.com/users/dimaswntech/repos?per_page=6')
            .then((response) => {
                repos.value = response.data
            })

        return {
            repos,
            editView,
        }
    },
}
</script>
<style>
* {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
        sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    box-sizing: border-box;
}
.Layout {
    display: grid;
    --Layout-sidebar-width: 220px;
    --Layout-gutter: 16px;
    grid-auto-flow: column;
    grid-template-columns: auto 0 minmax(
            0,
            calc(100% - var(--Layout-sidebar-width) - var(--Layout-gutter))
        );
    grid-gap: var(--Layout-gutter);
}
.Layout .Layout-sidebar {
    grid-column: 1;
}
.Layout-sidebar {
    width: 296px;
}
.user-profile-sticky-bar {
    position: fixed;
    top: 0;
    z-index: 90;
    width: 233px;
    word-break: break-all;
    pointer-events: none;
    opacity: 0;
    transition: 0.2s;
}
.user-profile-mini-vcard {
    position: relative;
    top: 1px;
    z-index: 110;
    height: 54px;
}
.lh-condensed-ultra {
    line-height: 1 !important;
}
.rounded-2 {
    border-radius: 6px !important;
}
.Layout .Layout-main {
    grid-column: 2 / span 2;
}
.Layout-main {
    min-width: 0;
}
.UnderlineNav {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    box-shadow: inset 0 -1px 0 var(--color-border-muted);
    justify-content: space-between;
}
.UnderlineNav-item {
    padding: 8px 16px;
    font-size: 14px;
    line-height: 30px;
    color: #24292f;
    text-align: center;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
    border-bottom: 2px solid transparent;
}
.UnderlineNav-item.selected,
.UnderlineNav-item[role='tab'][aria-selected='true'],
.UnderlineNav-item[aria-current]:not([aria-current='false']) {
    font-weight: 600;
    color: #24292f;
    border-bottom-color: #fd8c73;
    outline: 1px dotted transparent;
    outline-offset: -1px;
}
.UnderlineNav-octicon {
    margin-right: 4px;
    color: var(--color-fg-subtle);
}
.octicon {
    display: inline-block;
    overflow: visible !important;
    vertical-align: text-bottom;
    fill: currentColor;
}
.octicon {
    vertical-align: text-bottom;
}
.UnderlineNav .Counter {
    margin-left: 4px;
    color: var(--color-fg-default);
    /* background-color: #d0d7de; */
}
.Counter {
    display: inline-block;
    min-width: 20px;
    padding: 0 6px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    color: #24292f;
    text-align: center;
    background-color: rgba(175, 184, 193, 0.2);
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 2em;
}
.user-profile-sticky-bar {
    position: fixed;
    top: 0;
    z-index: 90;
    width: 233px;
    word-break: break-all;
    pointer-events: none;
    opacity: 0;
    transition: 0.2s;
}
.user-profile-mini-vcard {
    position: relative;
    top: 1px;
    z-index: 110;
    height: 54px;
}
.user-profile-mini-avatar {
    width: 32px;
}
.lh-condensed-ultra {
    line-height: 1 !important;
}
.avatar-user {
    border-radius: 50% !important;
}
.rounded-2 {
    border-radius: 6px !important;
}

.tooltipped {
    position: relative;
}
.avatar {
    display: inline-block;
    overflow: hidden;
    line-height: 1;
    vertical-align: middle;
    background-color: #ffffff;
    border-radius: 6px;
    flex-shrink: 0;
    box-shadow: 0 0 0 1px rgba(27, 31, 36, 0.15);
}
.avatar-user {
    border-radius: 50%;
}
.border {
    border: 1px solid #d0d7de;
}
.user-status-container {
    word-break: break-word;
    word-wrap: break-word;
    white-space: normal;
}
.vcard-names-container {
    position: sticky;
    top: 0;
}
.vcard-fullname {
    font-size: 26px;
    line-height: 1.25;
}
.vcard-username {
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    color: #57606a;
}
.btn {
    color: #24292f;
    background-color: #f6f8fa;
    box-shadow: 0 1px 0 rgba(27, 31, 36, 0.04),
        inset 0 1px 0 rgba(255, 255, 255, 0.25);
    transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    transition-property: color, background-color, border-color;
    position: relative;
    padding: 5px 16px;
    font-size: 14px;
    /* font-weight: 500; */
    line-height: 20px;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    border: 1px solid rgba(27, 31, 36, 0.15);
    border-radius: 6px;
}
.btn-block {
    display: block;
    width: 100%;
    text-align: center;
}
.vcard-details {
    list-style: none;
}
.Link--secondary {
    color: #57606a !important;
}
.name-repo {
    color: #0969da;
    font-size: 14px;
}
.no-underline {
    text-decoration: none !important;
}
.no-wrap {
    white-space: nowrap !important;
}
.color-fg-default {
    color: var(--color-fg-default) !important;
}
.user-profile-nav {
    background-color: var(--color-canvas-default);
    border-bottom: 1px solid var(--color-border-default);
    box-shadow: none;
}
.btn-link {
    display: inline-block;
    padding: 0;
    font-size: inherit;
    color: var(--color-accent-fg);
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
.Link--muted {
    color: #57606a !important;
}
.pinned-items-setting-link {
    font-size: 13px;
    font-weight: 400;
}
.flex-content-stretch {
    align-content: stretch !important;
}
.Box {
    background-color: #ffffff;
    border-color: #d0d7de;
    border-style: solid;
    border-width: 1px;
    border-radius: 6px;
}
.pinned-item-list-item-content {
    display: flex;
    width: 100%;
    flex-direction: column;
}
.Label {
    display: inline-block;
    padding: 0 7px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    border: 1px solid transparent;
    border-radius: 2em;
    border-color: #d0d7de;
}
.Label--secondary {
    color: #57606a;
    border-color: #d0d7de;
}
.pinned-item-desc {
    flex: 1 0 auto;
}
.color-fg-muted {
    color: #57606a !important;
}
.repo-language-color {
    position: relative;
    top: 1px;
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1px solid var(--color-primer-border-contrast);
    border-radius: 50%;
}
.pinned-item-meta {
    display: inline-block;
}
.Link--muted {
    color: #57606a !important;
}
.pinned-item-meta + .pinned-item-meta {
    margin-left: 16px;
}
.gutter-condensed {
    margin-right: -8px;
    margin-left: -8px;
}
.col-12 {
    width: 100%;
}
.repos {
    padding-right: 8px !important;
    padding-left: 8px !important;
}
.container-xl {
    max-width: 1280px;
    margin-right: auto;
    margin-left: auto;
}
@media (min-width: 1012px) {
    .col-lg-6 {
        width: 49.99999998%;
    }
    .col-lg-10 {
        width: 83.3333333%;
    }
    .col-lg-2 {
        width: 16.66666666%;
    }
    .col-lg-8 {
        width: 66.66666664%;
    }
}
@media (min-width: 768px) {
    .col-md-6 {
        width: 49.99999998%;
    }
}
.details {
    display: block;
}
.dropdown {
    position: relative;
}
.dropdown-caret {
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: middle;
    content: '';
    border-style: solid;
    border-width: 4px 4px 0;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
}
.details-reset > summary {
    list-style: none;
}
.rect {
    shape-rendering: crispEdges;
}
.ContributionCalendar-day,
.ContributionCalendar-day[data-level='0'] {
    fill: #ebedf0;
    shape-rendering: geometricPrecision;
    outline: 1px solid rgba(27, 31, 35, 0.06);
    outline-offset: -1px;
}
.ContributionCalendar-label {
    font-size: 9px;
    fill: #24292f;
}
.color-fg-muted {
    color: #57606a;
}
.ContributionCalendar-day[data-level='1'] {
    fill: #9be9a8;
    outline: 1px solid rgba(27, 31, 35, 0.06);
}
.ContributionCalendar-day[data-level='2'] {
    fill: #40c463;
    outline: 1px solid rgba(27, 31, 35, 0.06);
}
.ContributionCalendar-day[data-level='3'] {
    fill: #30a14e;
    outline: 1px solid rgba(27, 31, 35, 0.06);
}
.ContributionCalendar-day[data-level='4'] {
    fill: #216e39;
    outline: 1px solid rgba(27, 31, 35, 0.06);
}
.color-bg-default {
    background-color: #ffffff;
}
.ajax-pagination-form .ajax-pagination-btn {
    width: 100%;
    padding: 6px;
    margin-top: 20px;
    font-weight: 600;
    color: #0969da;
    background: #ffffff;
    border: 1px solid #d0d7de;
    border-radius: 6px;
}
a {
    color: #0969da;
    text-decoration: none;
}
.col-2 {
    width: 16.66666666%;
}
.filter-list.small .filter-item {
    padding: 6px 12px;
    font-size: 12px;
}
.filter-item.selected {
    color: #ffffff;
    background-color: #0969da;
}
.filter-item {
    position: relative;
    display: block;
    padding: 8px 16px;
    margin-bottom: 4px;
    overflow: hidden;
    font-size: 14px;
    color: #57606a;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    border-radius: 6px;
}
.p-responsive {
    padding-right: 16px !important;
    padding-left: 16px !important;
}
.color-border-muted {
    border-color: hsla(210, 18%, 87%, 1);
}
.footer-octicon {
    color: #6e7781;
}
.form-control,
.form-select {
    padding: 5px 12px;
    font-size: 14px;
    line-height: 20px;
    color: #24292f;
    vertical-align: middle;
    background-color: #ffffff;
    background-repeat: no-repeat;
    background-position: right 8px center;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    outline: none;
    box-shadow: inset 0 1px 0 rgba(208, 215, 222, 0.2);
}
textarea.form-control {
    padding-top: 8px;
    padding-bottom: 8px;
    line-height: 1.5;
}
.note {
    min-height: 17px;
    margin: 4px 0 2px;
    font-size: 12px;
    color: #57606a;
}
.color-fg-danger {
    color: #cf222e !important;
}
.btn-sm {
    padding: 3px 12px;
    font-size: 12px;
    line-height: 20px;
}

.btn-primary {
    color: #ffffff;
    background-color: #2da44e;
    border-color: rgba(27, 31, 36, 0.15);
    box-shadow: 0 1px 0 rgba(27, 31, 36, 0.1),
        nset 0 1px 0 rgba(255, 255, 255, 0.03);
}
.link-footer {
    color: #0969da;
}
</style>
