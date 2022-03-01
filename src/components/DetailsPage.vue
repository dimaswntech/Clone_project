<template>
    <main class="js-repo-pjax-container">
        <div
            class="pt-4 hide-full-screen mb-8"
            style="background-color: #f6f8fa"
        >
            <div class="flex mb-4 px-4 md:px-6 lg:px-8">
                <div class="flex-auto min-w-0 max-w-full mr-4">
                    <h1
                        class="
                            flex flex-wrap
                            items-center
                            break-word
                            text-xl
                            font-normal
                        "
                    >
                        <svg
                            aria-hidden="true"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            data-view-component="true"
                            class="octicon octicon-lock color-fg-muted mr-2"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4 4v2h-.25A1.75 1.75 0 002 7.75v5.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-5.5A1.75 1.75 0 0012.25 6H12V4a4 4 0 10-8 0zm6.5 2V4a2.5 2.5 0 00-5 0v2h5zM12 7.5h.25a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-5.5a.25.25 0 01.25-.25H12z"
                            ></path>
                        </svg>
                        <span class="author self-stretch">
                            <router-link to="/" class="author-name url fn">
                                {{ dataUser.owner.login }}
                            </router-link>
                        </span>
                        <span class="mx-1 self-stretch color-fg-muted">/</span>
                        <strong class="mr-2 self-stretch">
                            <router-link to="" class="author-name">
                                {{ dataUser.name }}
                            </router-link>
                        </strong>
                        <span></span>
                        <span class="Label Label--secondary v-align-middle mr-1"
                            >Private</span
                        >
                    </h1>
                </div>
                <ul class="pagehead-actions flex-shrink-0 hidden md:inline">
                    <li>
                        <details
                            class="
                                details-reset details-overlay
                                text-sm
                                relative
                            "
                        >
                            <summary class="btn-sm btn" role="button">
                                <span>
                                    <span>
                                        <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-eye"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"
                                            ></path>
                                        </svg>
                                        Unwatch
                                    </span>
                                    <span></span>
                                </span>
                                <span class="Counter">{{
                                    dataUser.watchers_count
                                }}</span>
                                <span class="dropdown-caret"></span>
                            </summary>
                            <details-menu class="SelectMenu" role="menu">
                                <div
                                    class="
                                        SelectMenu-modal
                                        notifications-component-menu-modal
                                    "
                                >
                                    <header class="SelectMenu-header">
                                        <h3 class="SelectMenu-title">
                                            Notifications
                                        </h3>
                                    </header>
                                    <div class="SelectMenu-list">
                                        <form action="">
                                            <button
                                                class="
                                                    SelectMenu-item
                                                    items-start
                                                "
                                            >
                                                <div>
                                                    <div
                                                        class="
                                                            text-sm
                                                            font-bold
                                                        "
                                                    >
                                                        Participating and
                                                        @mentions
                                                    </div>
                                                    <div
                                                        class="
                                                            font-small
                                                            color-fg-muted
                                                            font-normal
                                                            pb-1
                                                        "
                                                    >
                                                        Only receive
                                                        notifications from this
                                                        repository when
                                                        participating or
                                                        @mentioned.
                                                    </div>
                                                </div>
                                            </button>
                                            <button
                                                class="
                                                    SelectMenu-item
                                                    items-start
                                                "
                                            >
                                                <div>
                                                    <div
                                                        class="
                                                            text-sm
                                                            font-bold
                                                        "
                                                    >
                                                        All Activity
                                                    </div>
                                                    <div
                                                        class="
                                                            font-small
                                                            color-fg-muted
                                                            font-normal
                                                            pb-1
                                                        "
                                                    >
                                                        Notified of all
                                                        notifications on this
                                                        repository.
                                                    </div>
                                                </div>
                                            </button>
                                            <button
                                                class="
                                                    SelectMenu-item
                                                    items-start
                                                "
                                            >
                                                <div>
                                                    <div
                                                        class="
                                                            text-sm
                                                            font-bold
                                                        "
                                                    >
                                                        Ignore
                                                    </div>
                                                    <div
                                                        class="
                                                            font-small
                                                            color-fg-muted
                                                            font-normal
                                                            pb-1
                                                        "
                                                    >
                                                        Never be notified.
                                                    </div>
                                                </div>
                                            </button>
                                        </form>
                                        <button
                                            class="
                                                SelectMenu-item
                                                items-start
                                                pr-4
                                            "
                                        >
                                            <div>
                                                <div
                                                    class="
                                                        flex
                                                        items-start
                                                        justify-between
                                                    "
                                                >
                                                    <div
                                                        class="
                                                            text-sm
                                                            font-bold
                                                        "
                                                    >
                                                        Custom
                                                    </div>
                                                    <div class="text-sm pr-1">
                                                        <!-- <svg
                                                            aria-hidden="true"
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            version="1.1"
                                                            width="16"
                                                            data-view-component="true"
                                                            class="
                                                                octicon
                                                                octicon-arrow-right
                                                            "
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z"
                                                            ></path>
                                                        </svg> -->
                                                    </div>
                                                </div>
                                                <div
                                                    class="
                                                        text-xs
                                                        color-fg-muted
                                                        font-normal
                                                        pb-1
                                                    "
                                                >
                                                    Select events you want to be
                                                    notified of in addition to
                                                    participating and @mentions.
                                                </div>
                                            </div>
                                        </button>
                                        <div
                                            class="
                                                px-4
                                                py-2
                                                flex
                                                color-bg-subtle
                                                items-center
                                            "
                                        >
                                            <span class="text-sm">
                                                <svg
                                                    aria-hidden="true"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    version="1.1"
                                                    width="16"
                                                    data-view-component="true"
                                                    class="
                                                        octicon
                                                        octicon-device-mobile
                                                        SelectMenu-icon
                                                        SelectMenu-icon--device-mobile
                                                    "
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M3.75 0A1.75 1.75 0 002 1.75v12.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 14.25V1.75A1.75 1.75 0 0012.25 0h-8.5zM3.5 1.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25V1.75zM8 13a1 1 0 100-2 1 1 0 000 2z"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <span
                                                class="
                                                    text-xs
                                                    color-fg-muted
                                                    font-normal
                                                    pb-1
                                                "
                                            >
                                                Get push notifications on
                                                <router-link to=""
                                                    >iOS</router-link
                                                >
                                                or
                                                <router-link to=""
                                                    >Android</router-link
                                                >
                                                .
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </details-menu>
                        </details>
                    </li>
                    <li>
                        <button
                            aria-label="Cannot fork because you own this repository and are not a member of any organizations."
                            class="tooltipped tooltipped-s btn-sm btn"
                            disabled="disabled"
                        >
                            <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-repo-forked mr-2"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                ></path></svg
                            >Fork
                            <span class="Counter">{{
                                dataUser.forks_count
                            }}</span>
                        </button>
                    </li>
                    <li>
                        <form
                            action=""
                            class="
                                unstarred
                                js-social-form
                                BtnGroup-parent
                                flex-auto
                            "
                        >
                            <button
                                class="
                                    js-toggler-target
                                    rounded-left-2
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
                                    class="
                                        octicon octicon-star
                                        d-inline-block
                                        mr-2
                                    "
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                                    ></path>
                                </svg>
                                <span data-view-component="true" class="inline">
                                    Star
                                </span>
                                <span class="Counter">{{
                                    dataUser.stargazers_count
                                }}</span>
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
                                class="btn-sm btn BtnGroup-item px-2 float-none"
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
                            <details-menu class="SelectMenu right-0">
                                <div class="SelectMenu-modal">
                                    <div
                                        class="
                                            flex flex-col flex-1
                                            overflow-hidden
                                        "
                                    >
                                        <div class="SelectMenu-list">
                                            <div
                                                class="
                                                    js-user-list-menu-content-root
                                                    js-social-updatable
                                                "
                                            >
                                                <div
                                                    class="
                                                        pt-4
                                                        px-4
                                                        pb-0
                                                        overflow-y-auto
                                                    "
                                                    style="max-height: 228px"
                                                >
                                                    <h5
                                                        class="
                                                            mb-2
                                                            font-semibold
                                                            text-xs
                                                        "
                                                    >
                                                        Suggested lists
                                                    </h5>
                                                    <form
                                                        action=""
                                                        class="
                                                            js-user-list-menu-form
                                                        "
                                                    >
                                                        <div
                                                            class="
                                                                form-checkbox
                                                                mt-1
                                                                mb-0
                                                                p-1
                                                            "
                                                        >
                                                            <label
                                                                for=""
                                                                class="flex"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    class="
                                                                        mx-0
                                                                        js-user-list-menu-item
                                                                    "
                                                                />
                                                                <span
                                                                    class="
                                                                        Truncate
                                                                        ml-2
                                                                        font-normal
                                                                        text-sm
                                                                    "
                                                                >
                                                                    <span
                                                                        class="
                                                                            Truncate-text
                                                                        "
                                                                        ><g-emoji
                                                                            class="
                                                                                g-emoji
                                                                            "
                                                                            alias="crystal_ball"
                                                                            fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f52e.png"
                                                                            ><img
                                                                                class="
                                                                                    emoji
                                                                                "
                                                                                alt="crystal_ball"
                                                                                height="20"
                                                                                width="20"
                                                                                src="https://github.githubassets.com/images/icons/emoji/unicode/1f52e.png"
                                                                        /></g-emoji>
                                                                        Future
                                                                        ideas
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div
                                                            class="
                                                                form-checkbox
                                                                mt-1
                                                                mb-0
                                                                p-1
                                                            "
                                                        >
                                                            <label
                                                                for=""
                                                                class="flex"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    class="
                                                                        mx-0
                                                                        js-user-list-menu-item
                                                                    "
                                                                />
                                                                <span
                                                                    class="
                                                                        Truncate
                                                                        ml-2
                                                                        font-normal
                                                                        text-sm
                                                                    "
                                                                >
                                                                    <span
                                                                        class="
                                                                            Truncate-text
                                                                        "
                                                                        ><g-emoji
                                                                            class="
                                                                                g-emoji
                                                                            "
                                                                            alias="crystal_ball"
                                                                            fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f52e.png"
                                                                            ><img
                                                                                class="
                                                                                    emoji
                                                                                "
                                                                                alt="crystal_ball"
                                                                                height="20"
                                                                                width="20"
                                                                                src="https://github.githubassets.com/images/icons/emoji/unicode/1f52e.png"
                                                                        /></g-emoji>
                                                                        Future
                                                                        ideas
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <div
                                                            class="
                                                                form-checkbox
                                                                mt-1
                                                                mb-0
                                                                p-1
                                                            "
                                                        >
                                                            <label
                                                                for=""
                                                                class="flex"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    class="
                                                                        mx-0
                                                                        js-user-list-menu-item
                                                                    "
                                                                />
                                                                <span
                                                                    class="
                                                                        Truncate
                                                                        ml-2
                                                                        font-normal
                                                                        text-sm
                                                                    "
                                                                >
                                                                    <span
                                                                        class="
                                                                            Truncate-text
                                                                        "
                                                                        ><g-emoji
                                                                            class="
                                                                                g-emoji
                                                                            "
                                                                            alias="crystal_ball"
                                                                            fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f52e.png"
                                                                            ><img
                                                                                class="
                                                                                    emoji
                                                                                "
                                                                                alt="crystal_ball"
                                                                                height="20"
                                                                                width="20"
                                                                                src="https://github.githubassets.com/images/icons/emoji/unicode/1f52e.png"
                                                                        /></g-emoji>
                                                                        Future
                                                                        ideas
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </form>
                                                </div>
                                                <footer
                                                    class="
                                                        SelectMenu-footer
                                                        px-2
                                                        mt-2
                                                    "
                                                >
                                                    <button
                                                        class="
                                                            user-lists-menu-action
                                                            js-user-lists-create-trigger
                                                            btn-invisible
                                                            btn
                                                            btn-block
                                                            text-left
                                                            font-normal
                                                            rounded-1
                                                            px-2
                                                        "
                                                    >
                                                        <svg
                                                            aria-hidden="true"
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            version="1.1"
                                                            width="16"
                                                            data-view-component="true"
                                                            class="
                                                                octicon
                                                                octicon-plus
                                                                mr-1
                                                            "
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"
                                                            ></path>
                                                        </svg>
                                                        Create list
                                                    </button>
                                                </footer>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </details-menu>
                        </details>
                    </li>
                </ul>
            </div>
            <nav
                class="
                    js-repo-nav
                    js-sidenav-container-pjax
                    js-responsive-underlinenav
                    overflow-hidden
                    UnderlineNav
                    px-4
                    md:px-6
                    lg:px-8
                "
            >
                <ul class="UnderlineNav-body list-none">
                    <li class="inline-flex">
                        <router-link to="/" class="UnderlineNav-item">
                            <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="
                                    octicon octicon-code
                                    UnderlineNav-octicon
                                    d-none d-sm-inline
                                "
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"
                                ></path>
                            </svg>
                            Code
                        </router-link>
                    </li>
                    <li class="inline-flex">
                        <router-link to="/" class="UnderlineNav-item">
                            <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="
                                    octicon octicon-issue-opened
                                    UnderlineNav-octicon
                                    d-none d-sm-inline
                                "
                            >
                                <path
                                    d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                                ></path>
                                <path
                                    fill-rule="evenodd"
                                    d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
                                ></path>
                            </svg>
                            Issues
                        </router-link>
                    </li>
                    <li class="inline-flex">
                        <router-link to="/" class="UnderlineNav-item">
                            <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="
                                    octicon octicon-git-pull-request
                                    UnderlineNav-octicon
                                    d-none d-sm-inline
                                "
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"
                                ></path>
                            </svg>
                            Pull request
                        </router-link>
                    </li>
                    <li class="inline-flex">
                        <router-link to="/" class="UnderlineNav-item">
                            <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="
                                    octicon octicon-play
                                    UnderlineNav-octicon
                                    d-none d-sm-inline
                                "
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"
                                ></path>
                            </svg>
                            Actions
                        </router-link>
                    </li>
                    <li class="inline-flex">
                        <router-link to="/" class="UnderlineNav-item">
                            <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="
                                    octicon octicon-table
                                    UnderlineNav-octicon
                                    d-none d-sm-inline
                                "
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v3.585a.746.746 0 010 .83v8.085A1.75 1.75 0 0114.25 16H6.309a.748.748 0 01-1.118 0H1.75A1.75 1.75 0 010 14.25V6.165a.746.746 0 010-.83V1.75zM1.5 6.5v7.75c0 .138.112.25.25.25H5v-8H1.5zM5 5H1.5V1.75a.25.25 0 01.25-.25H5V5zm1.5 1.5v8h7.75a.25.25 0 00.25-.25V6.5h-8zm8-1.5h-8V1.5h7.75a.25.25 0 01.25.25V5z"
                                ></path>
                            </svg>
                            Projects
                        </router-link>
                    </li>
                    <li class="inline-flex">
                        <router-link to="/" class="UnderlineNav-item">
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
                                    d-none d-sm-inline
                                "
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"
                                ></path>
                            </svg>
                            Wiki
                        </router-link>
                    </li>
                    <li class="inline-flex">
                        <router-link to="/" class="UnderlineNav-item">
                            <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="
                                    octicon octicon-shield
                                    UnderlineNav-octicon
                                    d-none d-sm-inline
                                "
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z"
                                ></path>
                            </svg>
                            Security
                        </router-link>
                    </li>
                    <li class="inline-flex">
                        <router-link to="/" class="UnderlineNav-item">
                            <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="
                                    octicon octicon-graph
                                    UnderlineNav-octicon
                                    d-none d-sm-inline
                                "
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"
                                ></path>
                            </svg>
                            Insights
                        </router-link>
                    </li>
                    <li class="inline-flex">
                        <router-link to="/" class="UnderlineNav-item">
                            <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="
                                    octicon octicon-gear
                                    UnderlineNav-octicon
                                    d-none d-sm-inline
                                "
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M7.429 1.525a6.593 6.593 0 011.142 0c.036.003.108.036.137.146l.289 1.105c.147.56.55.967.997 1.189.174.086.341.183.501.29.417.278.97.423 1.53.27l1.102-.303c.11-.03.175.016.195.046.219.31.41.641.573.989.014.031.022.11-.059.19l-.815.806c-.411.406-.562.957-.53 1.456a4.588 4.588 0 010 .582c-.032.499.119 1.05.53 1.456l.815.806c.08.08.073.159.059.19a6.494 6.494 0 01-.573.99c-.02.029-.086.074-.195.045l-1.103-.303c-.559-.153-1.112-.008-1.529.27-.16.107-.327.204-.5.29-.449.222-.851.628-.998 1.189l-.289 1.105c-.029.11-.101.143-.137.146a6.613 6.613 0 01-1.142 0c-.036-.003-.108-.037-.137-.146l-.289-1.105c-.147-.56-.55-.967-.997-1.189a4.502 4.502 0 01-.501-.29c-.417-.278-.97-.423-1.53-.27l-1.102.303c-.11.03-.175-.016-.195-.046a6.492 6.492 0 01-.573-.989c-.014-.031-.022-.11.059-.19l.815-.806c.411-.406.562-.957.53-1.456a4.587 4.587 0 010-.582c.032-.499-.119-1.05-.53-1.456l-.815-.806c-.08-.08-.073-.159-.059-.19a6.44 6.44 0 01.573-.99c.02-.029.086-.075.195-.045l1.103.303c.559.153 1.112.008 1.529-.27.16-.107.327-.204.5-.29.449-.222.851-.628.998-1.189l.289-1.105c.029-.11.101-.143.137-.146zM8 0c-.236 0-.47.01-.701.03-.743.065-1.29.615-1.458 1.261l-.29 1.106c-.017.066-.078.158-.211.224a5.994 5.994 0 00-.668.386c-.123.082-.233.09-.3.071L3.27 2.776c-.644-.177-1.392.02-1.82.63a7.977 7.977 0 00-.704 1.217c-.315.675-.111 1.422.363 1.891l.815.806c.05.048.098.147.088.294a6.084 6.084 0 000 .772c.01.147-.038.246-.088.294l-.815.806c-.474.469-.678 1.216-.363 1.891.2.428.436.835.704 1.218.428.609 1.176.806 1.82.63l1.103-.303c.066-.019.176-.011.299.071.213.143.436.272.668.386.133.066.194.158.212.224l.289 1.106c.169.646.715 1.196 1.458 1.26a8.094 8.094 0 001.402 0c.743-.064 1.29-.614 1.458-1.26l.29-1.106c.017-.066.078-.158.211-.224a5.98 5.98 0 00.668-.386c.123-.082.233-.09.3-.071l1.102.302c.644.177 1.392-.02 1.82-.63.268-.382.505-.789.704-1.217.315-.675.111-1.422-.364-1.891l-.814-.806c-.05-.048-.098-.147-.088-.294a6.1 6.1 0 000-.772c-.01-.147.039-.246.088-.294l.814-.806c.475-.469.679-1.216.364-1.891a7.992 7.992 0 00-.704-1.218c-.428-.609-1.176-.806-1.82-.63l-1.103.303c-.066.019-.176.011-.299-.071a5.991 5.991 0 00-.668-.386c-.133-.066-.194-.158-.212-.224L10.16 1.29C9.99.645 9.444.095 8.701.031A8.094 8.094 0 008 0zm1.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11 8a3 3 0 11-6 0 3 3 0 016 0z"
                                ></path>
                            </svg>
                            Settings
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <div
            class="
                clearfix
                new-discussion-timeline
                container-xl
                px-4
                md:px-6
                lg:px-8
            "
        >
            <DetailContent
                :dataUser="dataUser"
                :dataContents="dataContents"
                :langValue="langValue"
            />
        </div>
    </main>
    <FooterCom />
</template>

<script>
import axios from 'axios'
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import DetailContent from '../components/DetailContent.vue'
import FooterCom from '../components/FooterCom.vue'
// import Navbar1 from '../components/Navbar1.vue'

export default {
    components: { DetailContent, FooterCom },
    setup() {
        const route = useRoute()
        const dataUser = ref([])
        const dataContents = ref([])
        const langValue = ref([])
        const name_params = route.params.name

        axios
            .get(
                'https://api.github.com/repos/dimaswntech/' +
                    name_params +
                    '/languages',
                {
                    headers: {
                        Authorization:
                            'token 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',
                    },
                }
            )
            .then((response) => {
                langValue.value = response.data
            })

        axios
            .get('https://api.github.com/repos/dimaswntech/' + name_params, {
                headers: {
                    Authorization:
                        'token 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',
                },
                owner: 'dimaswntech',
            })
            .then((response) => {
                dataUser.value = response.data
            })
            .catch((error) => console.log(error))

        axios
            .get(
                'https://api.github.com/repos/dimaswntech/' +
                    name_params +
                    '/contents',
                {
                    headers: {
                        Authorization:
                            'token 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',
                    },
                    owner: 'dimaswntech',
                }
            )
            .then((response) => {
                dataContents.value = response.data
            })
            .catch((error) => console.log(error))

        return {
            dataUser,
            name_params,
            dataContents,
            langValue,
        }
    },
}
</script>

<style>
.author-name {
    color: #0969da;
}
.color-bg-subtle {
    background-color: #f6f8fa !important;
}
.starring-container .unstarred,
.starring-container.on .starred {
    display: block;
}
.pagehead-actions > li {
    float: left;
    margin: 0 8px 0 0;
    font-size: 11px;
    color: #24292f;
    list-style-type: none;
}
.form-checkbox input[type='checkbox'],
.form-checkbox input[type='radio'] {
    float: left;
    margin: 5px 0 0 -20px;
    vertical-align: middle;
}
.Truncate {
    /* display: inline-flex; */
    min-width: 0;
    max-width: 100%;
}
.Truncate > .Truncate-text {
    min-width: 1ch;
    max-width: -moz-fit-content;
    max-width: fit-content;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
g-emoji {
    display: inline-block;
    min-width: 1ch;
    font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 1em;
    font-style: normal !important;
    font-weight: 400;
    line-height: 1;
    vertical-align: -0.075em;
}
.SelectMenu-footer {
    z-index: 0;
    padding: 8px 16px;
    font-size: 12px;
    color: var(--color-fg-muted);
    text-align: center;
    border-top: 1px solid var(--color-border-muted);
}
.rounded-1 {
    border-radius: 4px !important;
}
.user-lists-menu-action {
    color: #24292f;
}
.btn-invisible {
    color: #0969da;
    background-color: transparent;
    border: 0;
    box-shadow: none;
}
.btn-block {
    display: block;
    width: 100%;
    text-align: center;
}
.UnderlineNav {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    box-shadow: inset 0 -1px 0 hsla(210, 18%, 87%, 1);
    justify-content: space-between;
}
.UnderlineNav-body {
    display: flex;
}
/* .UnderlineNav-item.selected,
.UnderlineNav-item[role='tab'][aria-selected='true'],
.UnderlineNav-item[aria-current]:not([aria-current='false']) {
    font-weight: 600;
    color: #24292f;
    border-bottom-color: #fd8c73;
    outline: 1px dotted transparent;
    outline-offset: -1px;
} */
.hx_underlinenav-item {
    display: flex;
    align-items: center;
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
.container-xl {
    max-width: 1280px;
    margin-right: auto;
    margin-left: auto;
}
</style>
