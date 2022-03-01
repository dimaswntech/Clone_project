<template>
    <div class="border-b color-border-muted py-4">
        <div class="flex items-start">
            <form action="" class="w-full">
                <div class="flex flex-col lg:flex-row flex-auto">
                    <div class="mb-1 md:mb-0 md:mr-4 flex-auto">
                        <input
                            type="text"
                            class="form-control w-full"
                            placeholder="Find a repository..."
                            autocomplete="off"
                            v-model="repoInput"
                        />
                    </div>
                    <div class="flex flex-wrap">
                        <details
                            class="
                                details-reset details-overlay
                                relative
                                mt-1
                                lg:mt-0
                                mr-1
                            "
                        >
                            <summary class="btn">
                                <span>Type</span>
                                <span class="hidden">All</span>
                                <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-triangle-down"
                                >
                                    <path
                                        d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"
                                    ></path>
                                </svg>
                            </summary>
                            <details-menu class="SelectMenu lg:right-0">
                                <div class="SelectMenu-modal">
                                    <header class="SelectMenu-header">
                                        <span class="SelectMenu-title"
                                            >Select type</span
                                        >
                                        <!-- <button class="SelectMenu-closeButton">
                                            <svg
                                                aria-label="Close menu"
                                                aria-hidden="false"
                                                role="img"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                width="16"
                                                data-view-component="true"
                                                class="octicon octicon-x"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                                                ></path>
                                            </svg>
                                        </button> -->
                                    </header>
                                    <div class="SelectMenu-list">
                                        <label
                                            class="SelectMenu-item"
                                            role="menuitemradio"
                                            aria-checked="false"
                                            tabindex="0"
                                        >
                                            <input
                                                type="radio"
                                                name="type"
                                                id="type_public"
                                                value="public"
                                                hidden="hidden"
                                                data-autosubmit="true"
                                            />
                                            <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                width="16"
                                                data-view-component="true"
                                                class="
                                                    octicon octicon-check
                                                    SelectMenu-icon
                                                    SelectMenu-icon--check
                                                "
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                                                ></path>
                                            </svg>
                                            <span
                                                class="text-normal"
                                                data-menu-button-text=""
                                                >All</span
                                            >
                                        </label>
                                        <label
                                            class="SelectMenu-item"
                                            role="menuitemradio"
                                            aria-checked="false"
                                            tabindex="0"
                                        >
                                            <input
                                                type="radio"
                                                name="type"
                                                id="type_public"
                                                value="public"
                                                hidden="hidden"
                                                data-autosubmit="true"
                                            />
                                            <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                width="16"
                                                data-view-component="true"
                                                class="
                                                    hidden
                                                    octicon octicon-check
                                                    SelectMenu-icon
                                                    SelectMenu-icon--check
                                                "
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                                                ></path>
                                            </svg>
                                            <span
                                                class="text-normal"
                                                data-menu-button-text=""
                                                >Public</span
                                            >
                                        </label>
                                        <label
                                            class="SelectMenu-item"
                                            role="menuitemradio"
                                            aria-checked="false"
                                            tabindex="0"
                                        >
                                            <input
                                                type="radio"
                                                name="type"
                                                id="type_public"
                                                value="public"
                                                hidden="hidden"
                                                data-autosubmit="true"
                                            />
                                            <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                width="16"
                                                data-view-component="true"
                                                class="
                                                    hidden
                                                    octicon octicon-check
                                                    SelectMenu-icon
                                                    SelectMenu-icon--check
                                                "
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                                                ></path>
                                            </svg>
                                            <span
                                                class="text-normal"
                                                data-menu-button-text=""
                                                >Private</span
                                            >
                                        </label>
                                        <label
                                            class="SelectMenu-item"
                                            role="menuitemradio"
                                            aria-checked="false"
                                            tabindex="0"
                                        >
                                            <input
                                                type="radio"
                                                name="type"
                                                id="type_public"
                                                value="public"
                                                hidden="hidden"
                                                data-autosubmit="true"
                                            />
                                            <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                width="16"
                                                data-view-component="true"
                                                class="
                                                    hidden
                                                    octicon octicon-check
                                                    SelectMenu-icon
                                                    SelectMenu-icon--check
                                                "
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                                                ></path>
                                            </svg>
                                            <span
                                                class="text-normal"
                                                data-menu-button-text=""
                                                >Sources</span
                                            >
                                        </label>
                                        <label
                                            class="SelectMenu-item"
                                            role="menuitemradio"
                                            aria-checked="false"
                                            tabindex="0"
                                        >
                                            <input
                                                type="radio"
                                                name="type"
                                                id="type_public"
                                                value="public"
                                                hidden="hidden"
                                                data-autosubmit="true"
                                            />
                                            <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                width="16"
                                                data-view-component="true"
                                                class="
                                                    hidden
                                                    octicon octicon-check
                                                    SelectMenu-icon
                                                    SelectMenu-icon--check
                                                "
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                                                ></path>
                                            </svg>
                                            <span
                                                class="text-normal"
                                                data-menu-button-text=""
                                                >Forks</span
                                            >
                                        </label>
                                        <label
                                            class="SelectMenu-item"
                                            role="menuitemradio"
                                            aria-checked="false"
                                            tabindex="0"
                                        >
                                            <input
                                                type="radio"
                                                name="type"
                                                id="type_public"
                                                value="public"
                                                hidden="hidden"
                                                data-autosubmit="true"
                                            />
                                            <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                width="16"
                                                data-view-component="true"
                                                class="
                                                    hidden
                                                    octicon octicon-check
                                                    SelectMenu-icon
                                                    SelectMenu-icon--check
                                                "
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                                                ></path>
                                            </svg>
                                            <span
                                                class="text-normal"
                                                data-menu-button-text=""
                                                >Archived</span
                                            >
                                        </label>
                                        <label
                                            class="SelectMenu-item"
                                            role="menuitemradio"
                                            aria-checked="false"
                                            tabindex="0"
                                        >
                                            <input
                                                type="radio"
                                                name="type"
                                                id="type_public"
                                                value="public"
                                                hidden="hidden"
                                                data-autosubmit="true"
                                            />
                                            <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                width="16"
                                                data-view-component="true"
                                                class="
                                                    hidden
                                                    octicon octicon-check
                                                    SelectMenu-icon
                                                    SelectMenu-icon--check
                                                "
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                                                ></path>
                                            </svg>
                                            <span
                                                class="text-normal"
                                                data-menu-button-text=""
                                                >Mirrors</span
                                            >
                                        </label>
                                    </div>
                                </div>
                            </details-menu>
                        </details>
                        <details
                            class="
                                details-reset details-overlay
                                relative
                                mt-1
                                lg:mt-0
                            "
                        >
                            <summary class="btn">
                                <span>Language</span>
                                <span class="hidden">All</span>
                                <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-triangle-down"
                                >
                                    <path
                                        d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"
                                    ></path>
                                </svg>
                            </summary>
                            <details-menu
                                class="
                                    SelectMenu
                                    mt-1
                                    lg:mt-0
                                    md:mr-2 md:ml-2
                                    lg:right-0
                                "
                            >
                                <div class="SelectMenu-modal">
                                    <header class="SelectMenu-header">
                                        <span class="SelectMenu-title"
                                            >Select Language</span
                                        >
                                        <!-- <button class="SelectMenu-closeButton">
                                            <svg
                                                aria-label="Close menu"
                                                aria-hidden="false"
                                                role="img"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                width="16"
                                                data-view-component="true"
                                                class="octicon octicon-x"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                                                ></path>
                                            </svg>
                                        </button> -->
                                    </header>
                                    <div class="SelectMenu-list">
                                        <label
                                            class="SelectMenu-item"
                                            role="menuitemradio"
                                            aria-checked="false"
                                            tabindex="0"
                                        >
                                            <input
                                                type="radio"
                                                name="type"
                                                id="type_public"
                                                value="public"
                                                hidden="hidden"
                                                data-autosubmit="true"
                                            />
                                            <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                width="16"
                                                data-view-component="true"
                                                class="
                                                    octicon octicon-check
                                                    SelectMenu-icon
                                                    SelectMenu-icon--check
                                                "
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                                                ></path>
                                            </svg>
                                            <span
                                                class="text-normal"
                                                data-menu-button-text=""
                                                >PHP</span
                                            >
                                        </label>
                                        <label
                                            class="SelectMenu-item"
                                            role="menuitemradio"
                                            aria-checked="false"
                                            tabindex="0"
                                        >
                                            <input
                                                type="radio"
                                                name="type"
                                                id="type_public"
                                                value="public"
                                                hidden="hidden"
                                                data-autosubmit="true"
                                            />
                                            <!-- <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                width="16"
                                                data-view-component="true"
                                                class="
                                                    octicon octicon-check
                                                    SelectMenu-icon
                                                    SelectMenu-icon--check
                                                "
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                                                ></path>
                                            </svg> -->
                                            <span
                                                class="text-normal"
                                                data-menu-button-text=""
                                                >JavaScript</span
                                            >
                                        </label>
                                    </div>
                                </div>
                            </details-menu>
                        </details>
                        <details
                            class="
                                details-reset details-overlay
                                relative
                                mt-1
                                lg:mt-0
                                ml-1
                            "
                        >
                            <summary class="btn">
                                <span>Sort</span>
                                <span class="hidden">All</span>
                                <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-triangle-down"
                                >
                                    <path
                                        d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"
                                    ></path>
                                </svg>
                            </summary>
                            <details-menu
                                class="
                                    SelectMenu
                                    mt-1
                                    lg:mt-0
                                    md:mr-2 md:ml-2
                                    lg:right-0
                                "
                            >
                                <div class="SelectMenu-modal">
                                    <header class="SelectMenu-header">
                                        <span class="SelectMenu-title"
                                            >Select order</span
                                        >
                                        <!-- <button class="SelectMenu-closeButton">
                                            <svg
                                                aria-label="Close menu"
                                                aria-hidden="false"
                                                role="img"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                width="16"
                                                data-view-component="true"
                                                class="octicon octicon-x"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                                                ></path>
                                            </svg>
                                        </button> -->
                                    </header>
                                    <div class="SelectMenu-list">
                                        <label
                                            class="SelectMenu-item"
                                            role="menuitemradio"
                                            aria-checked="false"
                                            tabindex="0"
                                        >
                                            <input
                                                type="radio"
                                                name="type"
                                                id="type_public"
                                                value="public"
                                                hidden="hidden"
                                                data-autosubmit="true"
                                            />
                                            <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                width="16"
                                                data-view-component="true"
                                                class="
                                                    octicon octicon-check
                                                    SelectMenu-icon
                                                    SelectMenu-icon--check
                                                "
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                                                ></path>
                                            </svg>
                                            <span
                                                class="text-normal"
                                                data-menu-button-text=""
                                                >Last update</span
                                            >
                                        </label>
                                        <label
                                            class="SelectMenu-item"
                                            role="menuitemradio"
                                            aria-checked="false"
                                            tabindex="0"
                                        >
                                            <input
                                                type="radio"
                                                name="type"
                                                id="type_public"
                                                value="public"
                                                hidden="hidden"
                                                data-autosubmit="true"
                                            />
                                            <!-- <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                width="16"
                                                data-view-component="true"
                                                class="
                                                    octicon octicon-check
                                                    SelectMenu-icon
                                                    SelectMenu-icon--check
                                                "
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                                                ></path>
                                            </svg> -->
                                            <span
                                                class="text-normal"
                                                data-menu-button-text=""
                                                >Name</span
                                            >
                                        </label>
                                        <label
                                            class="SelectMenu-item"
                                            role="menuitemradio"
                                            aria-checked="false"
                                            tabindex="0"
                                        >
                                            <input
                                                type="radio"
                                                name="type"
                                                id="type_public"
                                                value="public"
                                                hidden="hidden"
                                                data-autosubmit="true"
                                            />
                                            <!-- <svg
                                                aria-hidden="true"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                width="16"
                                                data-view-component="true"
                                                class="
                                                    octicon octicon-check
                                                    SelectMenu-icon
                                                    SelectMenu-icon--check
                                                "
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                                                ></path>
                                            </svg> -->
                                            <span
                                                class="text-normal"
                                                data-menu-button-text=""
                                                >Stars</span
                                            >
                                        </label>
                                    </div>
                                </div>
                            </details-menu>
                        </details>
                    </div>
                </div>
            </form>
            <div class="hidden md:flex md:items-center md:justify-end">
                <router-link to="" class="text-center btn btn-primary ml-4"
                    ><svg
                        aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        class="octicon octicon-repo"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                        ></path></svg
                    >New</router-link
                >
            </div>
        </div>
    </div>
    <div class="user-repositories-list">
        <ul v-for="repo in filteredRepo" :key="repo">
            <li
                class="
                    col-12
                    flex
                    w-full
                    py-6
                    border-b
                    color-border-muted
                    private
                    source
                "
            >
                <div class="col-10 col-lg-9 inline-block">
                    <div class="inline-block mb-1">
                        <h3 class="break-all text-xl font-semibold">
                            <router-link :to="'/repo/' + repo.name" class="">
                                {{ repo.name }}</router-link
                            >
                            <span></span>
                            <span
                                class="
                                    Label Label--secondary
                                    align-middle
                                    ml-1
                                    mb-1
                                "
                                >Private</span
                            >
                        </h3>
                    </div>
                    <div></div>
                    <div class="text-xs color-fg-muted mt-2">
                        <span class="ml-0 mr-4">
                            <span
                                v-if="repo.language === 'JavaScript'"
                                style="background-color: #f1e05a"
                                class="repo-language-color"
                            ></span>
                            <span
                                v-else-if="repo.language === 'PHP'"
                                style="background-color: #4f5d95"
                                class="repo-language-color"
                            ></span>
                            <span itemprop="programmingLanguage">{{
                                repo.language
                            }}</span>
                        </span>
                        Updated
                        <relative-time
                            datetime="2022-01-19T05:18:40Z"
                            class="whitespace-nowrap"
                            title="Jan 19, 2022, 12:18 PM GMT+7"
                            >on Jan 19
                        </relative-time>
                    </div>
                </div>
                <div class="col-2 col-lg-3 flex flex-col justify-around">
                    <div class="text-right">
                        <div
                            class="
                                js-social-container js-form-toggle-container
                                flex
                                BtnGroup
                                float-right
                                js-toggler-container
                                starring-container
                            "
                        >
                            <form
                                action=""
                                class="
                                    js-social-form js-form-toggle-target
                                    unstarred
                                    BtnGroup-parent
                                "
                            >
                                <button
                                    class="
                                        rounded-left-2
                                        js-toggler-target
                                        btn-sm btn
                                        BtnGroup-item
                                    "
                                >
                                    <svg
                                        aria-hidden="true"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        version="1.1"
                                        width="16"
                                        data-view-component="true"
                                        class="octicon octicon-star mr-1"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                                        ></path></svg
                                    >Star
                                </button>
                            </form>
                            <details
                                class="
                                    details-reset details-overlay
                                    BtnGroup-parent
                                    js-user-list-menu
                                    inline-block
                                    relative
                                "
                            >
                                <summary
                                    class="
                                        btn-sm btn
                                        BtnGroup-item
                                        px-2
                                        float-none
                                    "
                                >
                                    <svg
                                        aria-hidden="true"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        version="1.1"
                                        width="16"
                                        data-view-component="true"
                                        class="octicon octicon-triangle-down"
                                    >
                                        <path
                                            d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"
                                        ></path>
                                    </svg>
                                </summary>
                            </details>
                        </div>
                    </div>
                    <div
                        class="text-right hide-lg hide-md hide-sm hide-xs mt-2"
                    >
                        <span class="tooltipped tooltipped-s">
                            <svg width="155" height="30">
                                <defs>
                                    <linearGradient
                                        id="gradient-449531456"
                                        x1="0"
                                        x2="0"
                                        y1="1"
                                        y2="0"
                                    >
                                        <stop
                                            offset="0%"
                                            stop-color="var(--color-calendar-graph-day-L1-bg)"
                                        ></stop>
                                        <stop
                                            offset="10%"
                                            stop-color="var(--color-calendar-graph-day-L2-bg)"
                                        ></stop>
                                        <stop
                                            offset="25%"
                                            stop-color="var(--color-calendar-graph-day-L3-bg)"
                                        ></stop>
                                        <stop
                                            offset="50%"
                                            stop-color="var(--color-calendar-graph-day-L4-bg)"
                                        ></stop>
                                    </linearGradient>
                                    <mask
                                        id="sparkline-449531456"
                                        x="0"
                                        y="0"
                                        width="155"
                                        height="28"
                                    >
                                        <polyline
                                            transform="translate(0, 28) scale(1,-1)"
                                            points="0,1 3,1 6,1 9,1 12,1 15,1 18,1 21,1 24,1 27,1 30,1 33,1 36,1 39,1 42,1 45,1 48,1 51,1 54,1 57,1 60,1 63,1 66,1 69,1 72,1 75,1 78,1 81,1 84,1 87,1 90,1 93,1 96,1 99,1 102,1 105,1 108,1 111,1 114,1 117,1 120,1 123,1 126,1 129,1 132,1 135,1 138,2 141,1 144,1 147,1 150,1 153,1 "
                                            fill="transparent"
                                            stroke="#8cc665"
                                            stroke-width="2"
                                        ></polyline>
                                    </mask>
                                </defs>

                                <g transform="translate(0, -12)">
                                    <rect
                                        x="0"
                                        y="-2"
                                        width="155"
                                        height="30"
                                        style="
                                            stroke: none;
                                            fill: url(#gradient-449531456);
                                            mask: url(#sparkline-449531456);
                                        "
                                    ></rect>
                                </g>
                            </svg>
                        </span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import { ref, computed } from 'vue'

export default {
    setup() {
        const dataRepo = ref([])
        const repoInput = ref('')
        const magic_flag = ref(false)
        const test = ref('')
        const dropone = ref(false)

        axios
            .get('https://api.github.com/users/dimaswntech/repos', {
                headers: {
                    Authorization:
                        'token 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',
                },
                owner: 'dimaswntech',
            })
            .then((response) => {
                dataRepo.value = response.data
            })
        const filteredRepo = computed(() => {
            const query = repoInput.value.toLowerCase()
            if (repoInput.value === '') {
                return dataRepo.value
            }
            if (repoInput.value === null) {
                for (const i = 0; i <= 5; i++) {
                    return dataRepo[i].value
                }
            }
            return dataRepo.value.filter((repo) => {
                return Object.values(repo).some((word) =>
                    String(word).toLowerCase().includes(query)
                )
            })
        })
        console.log(dataRepo.value)
        return {
            dataRepo,
            repoInput,
            filteredRepo,
            magic_flag,
            test,
            dropone,
        }
    },
}
</script>

<style>
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
.btn {
    color: #24292f;
    background-color: #f6f8fa;
    box-shadow: 0 1px 0 rgba(27, 31, 36, 0.04),
        inset 0 1px 0 rgba(255, 255, 255, 0.25);
    transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    transition-property: color, background-color, border-color;

    position: relative;
    display: inline-block;
    padding: 5px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    border: 1px solid rgba(27, 31, 36, 0.15);
    border-radius: 6px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
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
.btn .dropdown-caret {
    margin-left: 4px;
    opacity: 0.8;
}
.btn-primary {
    color: #ffffff;
    background-color: #2da44e;
    border-color: rgba(27, 31, 36, 0.15);
    box-shadow: 0 1px 0 rgba(27, 31, 36, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.03);
}
.col-10 {
    width: 83.3333333%;
}
@media (min-width: 1012px) {
    .col-lg-9 {
        width: 74.99999997%;
    }
}
h3 a {
    color: #0969da;
}
@media (min-width: 1012px) {
    .col-lg-3 {
        width: 24.99999999%;
    }
}
.BtnGroup {
    display: inline-block;
    vertical-align: middle;
}
.BtnGroup-parent {
    float: left;
}
.rounded-left-2 {
    border-bottom-left-radius: 6px !important;
    border-top-left-radius: 6px !important;
}
.BtnGroup-item {
    position: relative;
    float: left;
    border-right-width: 0;
    border-radius: 0;
}

.btn-sm {
    padding: 3px 12px;
    font-size: 12px;
    line-height: 20px;
}
.BtnGroup-parent:last-child .BtnGroup-item {
    border-right-width: 1px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
}
.BtnGroup-parent .BtnGroup-item {
    border-right-width: 0;
    border-radius: 0;
}
.tooltipped {
    position: relative;
    text-align: right;
}
@media (min-width: 544px) {
    .SelectMenu {
        position: absolute;
        top: auto;
        right: auto;
        bottom: auto;
        left: auto;
        padding: 0;
    }
}
.SelectMenu {
    position: absolute;
    top: 75%;
    right: 102px;
    /* bottom: 0; */
    /* left: 0; */
    z-index: 99;
    display: flex;
    padding: 16px;
    pointer-events: none;
    flex-direction: column;
}
@media (min-width: 544px) {
    .SelectMenu-modal {
        width: 300px;
        left: 40%;
        top: 1%;
        height: auto;
        max-height: 480px;
        margin: 8px 0 16px 0;
        font-size: 12px;
        border-color: #d0d7de;
        border-radius: 6px;
        box-shadow: 0 8px 24px rgba(140, 149, 159, 0.2);
        animation-name: SelectMenu-modal-animation--sm;
    }
}
.SelectMenu-modal {
    position: relative;
    z-index: 99;
    display: flex;
    max-height: 66%;
    margin: auto 0;
    overflow: hidden;
    pointer-events: auto;
    flex-direction: column;
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(140, 149, 159, 0.2);
    animation: SelectMenu-modal-animation 0.12s cubic-bezier(0, 0.1, 0.1, 1)
        backwards;
}
@media (min-width: 544px) {
    .SelectMenu-header {
        padding: 7px 7px 7px 16px;
    }
}
@media (min-width: 544px) {
    .SelectMenu-title {
        font-size: inherit;
    }
}
.SelectMenu-header {
    display: flex;
    flex: none;
    align-items: center;
    border-bottom: 1px solid hsla(210, 18%, 87%, 1);
}
.SelectMenu-title {
    flex: 1;
    font-size: 14px;
    font-weight: 600;
}
@media (min-width: 544px) {
    .SelectMenu-closeButton {
        padding: 8px;
        margin: -8px -7px;
    }
}
.SelectMenu-closeButton {
    padding: 16px;
    margin: -16px;
    line-height: 1;
    color: #57606a;
    background-color: transparent;
    border: 0;
}
button {
    cursor: pointer;
    border-radius: 0;
}
.SelectMenu-list {
    position: relative;
    padding: 0;
    margin: 0;
    margin-bottom: -1px;
    flex: auto;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #ffffff;
    -webkit-overflow-scrolling: touch;
}

label.SelectMenu-item {
    font-weight: 400;
}
@media (min-width: 544px) {
    .SelectMenu-item {
        padding: 7px 7px 7px 16px;
    }
}
.SelectMenu-item {
    display: flex;
    align-items: center;
    width: 100%;
    overflow: hidden;
    color: #24292f;
    text-align: left;
    cursor: pointer;
    background-color: #ffffff;
    border: 0;
    border-bottom: 1px solid hsla(210, 18%, 87%, 1);
}
</style>
