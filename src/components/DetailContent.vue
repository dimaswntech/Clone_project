<template>
    <div class="repository-content">
        <!-- {{ filterContent }} -->
        <div>
            <div
                class="
                    hidden
                    lg:block
                    mt-10
                    mr-4
                    Popover
                    top-0
                    right-0
                    color-shadow-medium
                    col-3
                "
            ></div>
            <div
                class="
                    Layout
                    Layout--flowRow-until-md
                    Layout--sidebarPosition-end
                    Layout--sidebarPosition-flowRow-end
                "
            >
                <div class="Layout-main">
                    <div class="file-navigation mb-4 flex items-start">
                        <div class="relative">
                            <details
                                id="branch-select-menu"
                                class="details-reset details-overlay mr-0 mb-0"
                            >
                                <summary class="btn css-truncate">
                                    <svg
                                        text="gray"
                                        aria-hidden="true"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        version="1.1"
                                        width="16"
                                        data-view-component="true"
                                        class="octicon octicon-git-branch"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"
                                        ></path></svg
                                    ><span
                                        class="css-truncate-target"
                                        data-menu-button=""
                                        >main</span
                                    ><span class="dropdown-caret"></span>
                                </summary>
                                <div class="SelectMenu">
                                    <div class="SelectMenu-modal">
                                        <header class="SelectMenu-header">
                                            <span class="SelectMenu-title"
                                                >Switch branches/tags</span
                                            >
                                        </header>
                                        <input-demux class="block">
                                            <tab-container
                                                class="
                                                    flex flex-col
                                                    js-branches-tags-tabs
                                                "
                                                style="min-height: 0"
                                            >
                                                <div class="SelectMenu-filter">
                                                    <input
                                                        type="text"
                                                        class="
                                                            SelectMenu-input
                                                            form-control
                                                        "
                                                    />
                                                </div>
                                                <div class="SelectMenu-tabs">
                                                    <button
                                                        aria-selected="true"
                                                        type="button"
                                                        class="SelectMenu-tab"
                                                    >
                                                        Branches
                                                    </button>
                                                    <button
                                                        aria-selected="false"
                                                        type="button"
                                                        class="SelectMenu-tab"
                                                    >
                                                        Tags
                                                    </button>
                                                </div>
                                            </tab-container>
                                        </input-demux>
                                    </div>
                                </div>
                            </details>
                        </div>
                        <div
                            class="
                                self-center
                                ml-4
                                self-stretch
                                hidden
                                lg:flex
                                items-center
                                lh-condensed-ultra
                            "
                        >
                            <router-link
                                to=""
                                class="Link--primary no-underline"
                            >
                                <svg
                                    text="gray"
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-git-branch"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"
                                    ></path></svg
                                ><strong>1</strong
                                ><span class="color-fg-muted">branch</span>
                            </router-link>
                            <router-link
                                to=""
                                class="ml-4 Link--primary no-underline"
                            >
                                <svg
                                    text="gray"
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    class="octicon octicon-tag"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"
                                    ></path></svg
                                ><strong>0</strong
                                ><span class="color-fg-muted">tags</span>
                            </router-link>
                        </div>
                        <div class="flex-auto"></div>
                        <router-link to="" class="btn ml-2 hidden md:block">
                            Go to file</router-link
                        >
                        <details
                            class="details-overlay details-reset relative block"
                        >
                            <summary class="btn ml-2">
                                <span class="hidden md:flex items-center"
                                    >Add file
                                    <span class="dropdown-caret ml-1"></span
                                ></span>
                                <span class="inline-block md:hidden"></span>
                            </summary>
                            <div>
                                <ul class="dropdown-menu dropdown-menu-sw">
                                    <li>
                                        <form action="">
                                            <!-- <input type="text" /> -->
                                            <button
                                                class="dropdown-item btn-link"
                                            >
                                                Create new file
                                            </button>
                                        </form>
                                    </li>
                                    <li>
                                        <router-link
                                            to=""
                                            class="dropdown-item"
                                        >
                                            Upload files</router-link
                                        >
                                    </li>
                                </ul>
                            </div>
                        </details>
                        <span class="hidden md:flex ml-2">
                            <details
                                class="
                                    relative
                                    details-overlay details-reset
                                    js-codespaces-details-container
                                "
                            >
                                <summary class="btn-primary btn">
                                    Code <span class="dropdown-caret"></span>
                                </summary>
                                <!-- <div class="relative">
                                    <div
                                        class="
                                            dropdown-menu dropdown-menu-sw
                                            p-0
                                        "
                                    >
                                        <div>
                                            <ul class="list-style-none">
                                                <li class="Box p-4">
                                                    <router-link
                                                        class="
                                                            Link--muted
                                                            float-right
                                                            tooltipped
                                                            tooltipped-s
                                                        "
                                                        to=""
                                                        ><svg
                                                            aria-hidden="true"
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            version="1.1"
                                                            width="16"
                                                            data-view-component="true"
                                                            class="
                                                                octicon
                                                                octicon-question
                                                            "
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zM6.92 6.085c.081-.16.19-.299.34-.398.145-.097.371-.187.74-.187.28 0 .553.087.738.225A.613.613 0 019 6.25c0 .177-.04.264-.077.318a.956.956 0 01-.277.245c-.076.051-.158.1-.258.161l-.007.004a7.728 7.728 0 00-.313.195 2.416 2.416 0 00-.692.661.75.75 0 001.248.832.956.956 0 01.276-.245 6.3 6.3 0 01.26-.16l.006-.004c.093-.057.204-.123.313-.195.222-.149.487-.355.692-.662.214-.32.329-.702.329-1.15 0-.76-.36-1.348-.863-1.725A2.76 2.76 0 008 4c-.631 0-1.155.16-1.572.438-.413.276-.68.638-.849.977a.75.75 0 101.342.67z"
                                                            ></path>
                                                        </svg>
                                                        <div class="font-bold">
                                                            <svg
                                                                aria-hidden="true"
                                                                height="16"
                                                                viewBox="0 0 16 16"
                                                                version="1.1"
                                                                width="16"
                                                                data-view-component="true"
                                                                class="
                                                                    octicon
                                                                    octicon-terminal
                                                                    mr-2
                                                                "
                                                            >
                                                                <path
                                                                    fill-rule="evenodd"
                                                                    d="M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0114.25 15H1.75A1.75 1.75 0 010 13.25V2.75zm1.75-.25a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V2.75a.25.25 0 00-.25-.25H1.75zM7.25 8a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L5.44 8 3.72 6.28a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm1.5 1.5a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                                                                ></path>
                                                            </svg>
                                                            Clone
                                                        </div>
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> -->
                            </details>
                        </span>
                    </div>
                    <div class="Box mb-4">
                        <div class="Box-header relative">
                            <div
                                class="
                                    js-details-container
                                    Details
                                    flex
                                    rounded-top-2
                                    items-center
                                    flex-wrap
                                "
                            >
                                <div
                                    class="
                                        flex-shrink-0
                                        -ml-1
                                        -mr-1
                                        -mt-1
                                        -mb-1
                                        hx_avatar_stack_commit
                                    "
                                >
                                    <div class="AvatarStack self-start">
                                        <div class="AvatarStack-body">
                                            <router-link
                                                to=""
                                                class="avatar avatar-user"
                                                ><img
                                                    data-test-selector="commits-avatar-stack-avatar-image"
                                                    src="https://avatars.githubusercontent.com/u/67653363?s=48&amp;v=4"
                                                    width="24"
                                                    height="24"
                                                    alt="@dimaswntech"
                                                    class="avatar-user"
                                            /></router-link>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="
                                        flex-1 flex
                                        items-center
                                        ml-4
                                        min-w-0
                                    "
                                >
                                    <div
                                        class="
                                            css-truncate css-truncate-overflow
                                            color-fg-muted
                                        "
                                    >
                                        <router-link
                                            to=""
                                            class="commit-author user-mention"
                                            >dimaswntech</router-link
                                        >
                                        <span class="hidden sm:inline">
                                            <router-link
                                                to=""
                                                class="
                                                    Link--primary
                                                    markdown-title
                                                "
                                                >Add files via
                                                upload</router-link
                                            >
                                        </span>
                                    </div>
                                    <div
                                        class="
                                            flex flex-auto
                                            justify-end
                                            ml-4
                                            items-baseline
                                        "
                                    >
                                        <router-link
                                            to=""
                                            class="
                                                text-xs
                                                Link--secondary
                                                text-mono
                                                ml-2
                                                hidden
                                                lg:inline
                                            "
                                        >
                                            708a1ee
                                        </router-link>
                                        <router-link
                                            to=""
                                            class="Link--secondary ml-2"
                                        >
                                            on Mar 9, 2021</router-link
                                        >
                                    </div>
                                </div>
                                <div class="flex-shrink-0">
                                    <!-- <h2 class="sr-only"></h2> -->
                                    <ul class="list-style-none flex">
                                        <li class="ml-0 md:ml-4">
                                            <router-link
                                                to=""
                                                class="
                                                    pl-4
                                                    pr-4
                                                    py-4
                                                    md:p-0
                                                    -mt-3
                                                    -mb-3
                                                    -mr-3
                                                    md:m-0
                                                    Link--primary
                                                    no-underline
                                                    whitespace-nowrap
                                                "
                                            >
                                                <svg
                                                    text="gray"
                                                    aria-hidden="true"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    version="1.1"
                                                    width="16"
                                                    data-view-component="true"
                                                    class="
                                                        octicon octicon-history
                                                    "
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"
                                                    ></path></svg
                                                ><span class="hidden sm:inline">
                                                    <strong>1</strong>
                                                    <span
                                                        class="
                                                            hidden
                                                            color-fg-muted
                                                            lg:inline
                                                        "
                                                    >
                                                        commit
                                                    </span>
                                                </span>
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="js-details-container Details">
                            <div
                                role="grid"
                                class="
                                    Details-content--hidden-not-important
                                    js-navigation-container
                                    js-active-navigation-container
                                    md:block
                                "
                            >
                                <div
                                    v-for="(content, index) in dataContents"
                                    :key="dataContents[index]"
                                    class="
                                        Box-row Box-row--focus-gray
                                        py-2
                                        flex
                                        relative
                                        js-navigation-item
                                    "
                                >
                                    <div
                                        class="mr-4 flex-shrink-0"
                                        role="gridcell"
                                    >
                                        <svg
                                            v-if="content.type === 'dir'"
                                            aria-label="Directory"
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="
                                                octicon octicon-file-directory
                                                hx_color-icon-directory
                                            "
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"
                                            ></path>
                                        </svg>
                                        <svg
                                            v-if="content.type === 'file'"
                                            aria-label="File"
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="
                                                octicon octicon-file
                                                color-fg-muted
                                            "
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div
                                        role="rowheader"
                                        class="flex-auto min-w-0 col-md-2 mr-4"
                                    >
                                        <span
                                            class="
                                                css-truncate css-truncate-target
                                                block
                                                max-w-full
                                            "
                                            ><router-link
                                                to=""
                                                class="
                                                    js-navigation-open
                                                    Link--primary
                                                "
                                                >{{ content.name }}</router-link
                                            >
                                        </span>
                                    </div>
                                    <div
                                        class="
                                            flex-auto
                                            min-w-0
                                            hidden
                                            md:block
                                            col-5
                                            mr-4
                                        "
                                        role="gridcell"
                                    >
                                        <span
                                            class="
                                                css-truncate css-truncate-target
                                                block
                                                max-w-full
                                                markdown-title
                                            "
                                        >
                                            <router-link
                                                to=""
                                                class="Link--secondary"
                                            >
                                                Add files via upload
                                            </router-link>
                                        </span>
                                    </div>
                                    <div
                                        style="width: 100px"
                                        class="color-fg-muted text-right"
                                    >
                                        <span class="whitespace-nowrap"
                                            >12 months ago</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flash mb-6">
                        <router-link
                            to=""
                            class="btn btn-sm btn-primary flash-action"
                        >
                            Add a README
                        </router-link>
                        Help people interested in this repository understand
                        your project by adding a README.
                    </div>
                </div>
                <div class="Layout-sidebar">
                    <div class="BorderGrid BorderGrid--spacious">
                        <div class="BorderGrid-row hide-sm hide-md">
                            <div class="BorderGrid-cell">
                                <details
                                    class="
                                        details-reset
                                        details-overlay
                                        details-overlay-dark
                                    "
                                >
                                    <summary class="float-right">
                                        <div class="Link--secondary pt-1 pl-2">
                                            <svg
                                                aria-label="Edit repository metadata"
                                                role="img"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                width="16"
                                                data-view-component="true"
                                                class="
                                                    octicon octicon-gear
                                                    float-right
                                                "
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M7.429 1.525a6.593 6.593 0 011.142 0c.036.003.108.036.137.146l.289 1.105c.147.56.55.967.997 1.189.174.086.341.183.501.29.417.278.97.423 1.53.27l1.102-.303c.11-.03.175.016.195.046.219.31.41.641.573.989.014.031.022.11-.059.19l-.815.806c-.411.406-.562.957-.53 1.456a4.588 4.588 0 010 .582c-.032.499.119 1.05.53 1.456l.815.806c.08.08.073.159.059.19a6.494 6.494 0 01-.573.99c-.02.029-.086.074-.195.045l-1.103-.303c-.559-.153-1.112-.008-1.529.27-.16.107-.327.204-.5.29-.449.222-.851.628-.998 1.189l-.289 1.105c-.029.11-.101.143-.137.146a6.613 6.613 0 01-1.142 0c-.036-.003-.108-.037-.137-.146l-.289-1.105c-.147-.56-.55-.967-.997-1.189a4.502 4.502 0 01-.501-.29c-.417-.278-.97-.423-1.53-.27l-1.102.303c-.11.03-.175-.016-.195-.046a6.492 6.492 0 01-.573-.989c-.014-.031-.022-.11.059-.19l.815-.806c.411-.406.562-.957.53-1.456a4.587 4.587 0 010-.582c.032-.499-.119-1.05-.53-1.456l-.815-.806c-.08-.08-.073-.159-.059-.19a6.44 6.44 0 01.573-.99c.02-.029.086-.075.195-.045l1.103.303c.559.153 1.112.008 1.529-.27.16-.107.327-.204.5-.29.449-.222.851-.628.998-1.189l.289-1.105c.029-.11.101-.143.137-.146zM8 0c-.236 0-.47.01-.701.03-.743.065-1.29.615-1.458 1.261l-.29 1.106c-.017.066-.078.158-.211.224a5.994 5.994 0 00-.668.386c-.123.082-.233.09-.3.071L3.27 2.776c-.644-.177-1.392.02-1.82.63a7.977 7.977 0 00-.704 1.217c-.315.675-.111 1.422.363 1.891l.815.806c.05.048.098.147.088.294a6.084 6.084 0 000 .772c.01.147-.038.246-.088.294l-.815.806c-.474.469-.678 1.216-.363 1.891.2.428.436.835.704 1.218.428.609 1.176.806 1.82.63l1.103-.303c.066-.019.176-.011.299.071.213.143.436.272.668.386.133.066.194.158.212.224l.289 1.106c.169.646.715 1.196 1.458 1.26a8.094 8.094 0 001.402 0c.743-.064 1.29-.614 1.458-1.26l.29-1.106c.017-.066.078-.158.211-.224a5.98 5.98 0 00.668-.386c.123-.082.233-.09.3-.071l1.102.302c.644.177 1.392-.02 1.82-.63.268-.382.505-.789.704-1.217.315-.675.111-1.422-.364-1.891l-.814-.806c-.05-.048-.098-.147-.088-.294a6.1 6.1 0 000-.772c-.01-.147.039-.246.088-.294l.814-.806c.475-.469.679-1.216.364-1.891a7.992 7.992 0 00-.704-1.218c-.428-.609-1.176-.806-1.82-.63l-1.103.303c-.066.019-.176.011-.299-.071a5.991 5.991 0 00-.668-.386c-.133-.066-.194-.158-.212-.224L10.16 1.29C9.99.645 9.444.095 8.701.031A8.094 8.094 0 008 0zm1.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11 8a3 3 0 11-6 0 3 3 0 016 0z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </summary>
                                </details>
                                <h2 class="mb-4 text-base font-semibold">
                                    About
                                </h2>
                                <div
                                    class="text-base my-4 color-fg-muted italic"
                                >
                                    No description, website, or topics provided.
                                </div>
                                <div class="mt-2">
                                    <router-link to="" class="Link--muted">
                                        <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-star mr-2"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                                            ></path></svg
                                        ><strong>0</strong>stars
                                    </router-link>
                                </div>
                                <div class="mt-2">
                                    <router-link to="" class="Link--muted">
                                        <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="octicon octicon-eye mr-2"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"
                                            ></path></svg
                                        ><strong>1</strong>watching
                                    </router-link>
                                </div>
                                <div class="mt-2">
                                    <router-link to="" class="Link--muted">
                                        <svg
                                            aria-hidden="true"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            class="
                                                octicon octicon-repo-forked
                                                mr-2
                                            "
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                            ></path></svg
                                        ><strong>0</strong>forks
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="BorderGrid-row">
                            <div class="BorderGrid-cell">
                                <h2 class="text-base font-semibold mb-4">
                                    <router-link
                                        to=""
                                        class="Link--primary no-underline"
                                    >
                                        Releases</router-link
                                    >
                                </h2>
                                <div class="text-xs color-fg-muted">
                                    No releases published
                                </div>
                                <div class="text-xs">
                                    <router-link class="link-sidebar" to=""
                                        >Create a new release</router-link
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="BorderGrid-row">
                            <div class="BorderGrid-cell">
                                <h2 class="text-base font-semibold mb-4">
                                    <router-link
                                        to=""
                                        class="Link--primary no-underline"
                                    >
                                        Packages</router-link
                                    >
                                </h2>
                                <div class="text-xs color-fg-muted">
                                    No packages published
                                </div>
                                <div class="text-xs">
                                    <router-link class="link-sidebar" to=""
                                        >Publish your first package</router-link
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="BorderGrid-row">
                            <div class="BorderGrid-cell">
                                <h2 class="text-base font-semibold mb-4">
                                    Languages
                                </h2>
                                <div class="mb-2">
                                    <span class="Progress">
                                        <span
                                            style="
                                                background-color: #4f5d95 !important;
                                                width: 92%;
                                            "
                                            itemprop="keywords"
                                            aria-label="PHP 92.0"
                                            data-view-component="true"
                                            class="
                                                Progress-item
                                                color-bg-success-emphasis
                                            "
                                        ></span>
                                        <span
                                            style="
                                                background-color: #878787 !important;
                                                width: 8%;
                                            "
                                            itemprop="keywords"
                                            aria-label="Hack 8.0"
                                            data-view-component="true"
                                            class="
                                                Progress-item
                                                color-bg-success-emphasis
                                            "
                                        ></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- {{ filterCon }} -->
    </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
    props: ['dataUser', 'dataContents', 'langValue'],
    computed: {
        filterCon() {
            return `${this.dataContents.filter((repo) => repo.name)}`
        },
    },
    setup() {
        return {}
    },
}
</script>

<style>
.Layout.Layout--sidebarPosition-end .Layout-main {
    grid-column: 1;
}
.Layout .Layout-main {
    grid-column: 2 / span 2;
}
.Layout-main {
    min-width: 0;
}
.Popover {
    position: absolute;
    z-index: 100;
}
.color-shadow-medium {
    box-shadow: 0 3px 6px rgba(140, 149, 159, 0.15) !important;
}
.col-3 {
    width: 24.99999999%;
}
.Layout.Layout--sidebarPosition-end {
    grid-template-columns: minmax(0, calc(100% - 296px - 24px)) 0 auto;
}

@media (min-width: 1012px) {
    .Layout {
        --Layout-sidebar-width: 296px;
    }
}
@media (min-width: 768px) {
    .Layout {
        --Layout-sidebar-width: 256px;
    }
}
@media (min-width: 544px) {
    .Layout {
        --Layout-sidebar-width: 220px;
    }
}
@media (min-width: 1012px) {
    .Layout {
        --Layout-gutter: 24px;
    }
}
.css-truncate.css-truncate-target,
.css-truncate .css-truncate-target {
    display: inline-block;
    max-width: 125px;
    vertical-align: top;
}

.css-truncate.css-truncate-overflow,
.css-truncate .css-truncate-overflow,
.css-truncate.css-truncate-target,
.css-truncate .css-truncate-target {
    /* overflow: hidden; */
    text-overflow: ellipsis;
    white-space: nowrap;
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
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    display: flex;
    padding: 16px;
    pointer-events: none;
    flex-direction: column;
}
@media (min-width: 544px) {
    .SelectMenu-modal {
        width: 300px;
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

.SelectMenu-header {
    display: flex;
    padding: 16px;
    flex: none;
    align-items: center;
    border-bottom: 1px solid hsla(210, 18%, 87%, 1);
}
@media (min-width: 544px) {
    .SelectMenu-title {
        font-size: inherit;
    }
}
.SelectMenu-title {
    flex: 1;
    font-size: 14px;
    font-weight: 600;
}
@media (min-width: 544px) {
    .SelectMenu-filter {
        padding: 8px;
    }
}

.SelectMenu-filter {
    padding: 16px;
    margin: 0;
    border-bottom: 1px solid hsla(210, 18%, 87%, 1);
}
@media (min-width: 544px) {
    .SelectMenu-input {
        font-size: 14px;
    }
}

.SelectMenu-input {
    display: block;
    width: 100%;
}
@media (min-width: 544px) {
    .SelectMenu-tabs {
        padding: 8px 8px 0 8px;
    }
}

.SelectMenu-tabs {
    display: flex;
    flex-shrink: 0;
    overflow-x: auto;
    overflow-y: hidden;
    box-shadow: inset 0 -1px 0 hsla(210, 18%, 87%, 1);
    -webkit-overflow-scrolling: touch;
}
@media (min-width: 544px) {
    .SelectMenu-tab[aria-selected='true'] {
        border-color: hsla(210, 18%, 87%, 1);
        box-shadow: none;
    }
}
.SelectMenu-tab[aria-selected='true'] {
    z-index: 1;
    color: #24292f;
    cursor: default;
    background-color: #ffffff;
    box-shadow: 0 0 0 1px hsla(210, 18%, 87%, 1);
}
button,
html [type='button'],
[type='reset'],
[type='submit'] {
    -webkit-appearance: button;
}
@media (min-width: 544px) {
    .SelectMenu-tab {
        flex: none;
        padding: 4px 16px;
        border: 1px solid transparent;
        border-bottom-width: 0;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }
}
.SelectMenu-tab {
    flex: 1;
    padding: 8px 16px;
    font-size: 12px;
    font-weight: 500;
    color: #57606a;
    text-align: center;
    background-color: transparent;
    border: 0;
    box-shadow: inset 0 -1px 0 hsla(210, 18%, 87%, 1);
}
.lh-condensed-ultra {
    line-height: 1 !important;
}
.no-underline {
    text-decoration: none !important;
}

.Link--primary {
    color: #242924 !important;
}
.dropdown-item.btn-link {
    width: 100%;
    text-align: left;
}
.dropdown-item {
    display: block;
    padding: 4px 8px 4px 16px;
    overflow: hidden;
    color: #24292f;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.dropdown-menu-sw {
    right: 0;
    left: auto;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 100;
    width: 160px;
    padding-top: 4px;
    padding-bottom: 4px;
    margin-top: 2px;
    list-style: none;
    background-color: #ffffff;
    background-clip: padding-box;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    box-shadow: 0 8px 24px rgba(140, 149, 159, 0.2);
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section {
    display: block;
}
.btn-primary {
    color: #ffffff;
    background-color: #2da44e;
    border-color: rgba(27, 31, 36, 0.15);
    box-shadow: 0 1px 0 rgba(27, 31, 36, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.03);
}
.list-style-none {
    list-style: none !important;
}
.Box-header {
    padding: 16px;
    margin: -1px -1px 0;
    background-color: #f6f8fa;
    border-color: #d0d7de;
    border-style: solid;
    border-width: 1px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}
.rounded-top-2 {
    border-top-left-radius: 6px !important;
    border-top-right-radius: 6px !important;
}
.hx_avatar_stack_commit .AvatarStack {
    height: 24px;
    min-width: 24px;
}
.AvatarStack {
    position: relative;
    min-width: 26px;
    height: 20px;
}
.AvatarStack-body:not(:hover) {
    background-color: transparent;
}
.AvatarStack .AvatarStack-body {
    position: absolute;
}
.AvatarStack-body {
    display: flex;
    background: #ffffff;
}
.hx_avatar_stack_commit .AvatarStack .avatar {
    width: 24px;
    height: 24px;
}
.AvatarStack-body .avatar:last-child {
    z-index: 1;
    border-right: 0;
}
.AvatarStack-body .avatar:first-child {
    z-index: 3;
}
.AvatarStack-body .avatar {
    position: relative;
    z-index: 2;
    display: flex;
    width: 20px;
    height: 20px;
    box-sizing: content-box;
    margin-right: -11px;
    background-color: #ffffff;
    border-right: 1px solid #ffffff;
    border-radius: 4px;
    box-shadow: none;
    transition: margin .1s ease-in-out;
}
.avatar-user {
    border-radius: 50% !important;
}
.avatar {
    display: inline-block;
    overflow: hidden;
    line-height: 1;
    vertical-align: middle;
    background-color: #ffffff;
    border-radius: 6px;
    flex-shrink: 0;
    box-shadow: 0 0 0 1px rgba(27, 31, 36, 0.15));
}
.avatar-user {
    border-radius: 50% !important;
}.user-mention, .team-mention {
    font-weight: 600;
    color: #24292f;
    white-space: nowrap;
}
.Link--primary {
    color: #24292f !important;
}
.text-mono {
    font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace !important;
}
.Box-row {
    padding: 8px 16px 8px 16px;
    margin-top: -1px;
    list-style-type: none;
    border-top-color: hsla(210, 18%, 87%, 1);
    border-top-style: solid;
    border-top-width: 1px;
}
@media (min-width: 768px)
{.col-md-2 {
    width: 16.66666666%;
}}
.col-5 {
    width: 41.66666665%;
}
.hx_color-icon-directory {
    color: #54aeff;
}
.flash {
    color: #24292f;
    background-image: linear-gradient(#ddf4ff, #ddf4ff);
    border-color: rgba(84, 174,255,0.4);
}
.flash {
    position: relative;
    padding: 20px 16px;
    border-style: solid;
    border-width: 1px;
    border-radius: 6px;
}
.flash-action {
    float: right;
    margin-top: -3px;
    margin-left: 24px;
    background-clip: padding-box;
}
.Layout.Layout--sidebarPosition-end .Layout-sidebar {
    grid-column: 2/span 2;
}
.Layout .Layout-sidebar {
    grid-column: 1;
}

.Layout-sidebar {
    width: 256px;
}
.BorderGrid--spacious {
    margin-top: -24px;
    margin-bottom: -24px;
}

.BorderGrid {
    margin-top: -16px;
    margin-bottom: -16px;
}
.BorderGrid {
    display: table;
    border-collapse: collapse;
    border-style: hidden;
    table-layout: fixed;
    width: 100%;
}
.BorderGrid-row {
    display: table-row;
}
.BorderGrid--spacious .BorderGrid-cell {
    padding-top: 24px;
    padding-bottom: 24px;
}

/* .BorderGrid .BorderGrid-cell {
    padding-top: 16px;
    padding-bottom: 16px;
} */
.BorderGrid-cell {
    display: table-cell;
    border: 1px solid hsla(210, 18%, 87%, 1);
}
.link-sidebar{
    color: #0969da;
}
.Progress {
    display: flex;
    height: 8px;
    overflow: hidden;
    background-color: rgba(175, 184,193,0.2);
    border-radius: 6px;
    outline: 1px solid transparent;
}
</style>
