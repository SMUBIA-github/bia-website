"use client";
import React from "react";
import styles from "./nav.module.css";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  // DropdownSection, commented out for now since not used
  DropdownItem,
} from "@nextui-org/dropdown";

import {
  Button,
  // ButtonGroup
} from "@nextui-org/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className={styles.navcontainer}>
      <nav className={styles.navbar}>
        <div className="container">
          {" "}
          {/* Use Bootstrap container */}
          <div className="row align-items-center">
            {" "}
            {/* Bootstrap row */}
            <div className="col-4">
              <Link href="./">
                <div className={styles.namecontainer}>
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "35%", height: "auto", minWidth: "100px" }}
                  />
                </div>
              </Link>
            </div>
            <div className="col-8 d-flex justify-content-end">
              {" "}
              {/* Align links to the right */}
              {/* Navigation links */}
              <div className="d-none d-lg-block">
                <div className={styles.linksContainer}>
                  <Link href="./" className={styles.NavLink}>
                    Who we are
                  </Link>
                  <Link href="/WhatWeDo" className={styles.NavLink}>
                    What we do
                  </Link>
                  <Link
                    href="https://hackathon-two-rho.vercel.app/"
                    target="_blank"
                    className={styles.DataLink}
                  >
                    Datathon
                  </Link>
                  <Link href="/Merchandise" className={styles.NavLink}>
                    Merch
                  </Link>
                  <Link href="/ContactUs" className={styles.NavLink}>
                    Contact
                  </Link>
                </div>
              </div>
              <div className="d-lg-none">
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered">
                      <FontAwesomeIcon icon={faBars} />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Navigation Links"
                    className={styles.customDropdownMenu}
                  >
                    <DropdownItem>
                      <Link href="./" className={styles.NavLink}>
                        Who we are
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link href="/WhatWeDo" className={styles.NavLink}>
                        What we do
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link href="/Datathon" className={styles.NavLink}>
                        Datathon
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link href="/Merchandise" className={styles.NavLink}>
                        Merch
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link href="/ContactUs" className={styles.NavLink}>
                        Contact
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
