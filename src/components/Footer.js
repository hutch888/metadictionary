import React from "react";

export default function Footer() {
	return (
		<React.Fragment>
			<div className="footer">
				<p>Created in 2021 by Hutch Mathers.</p>
				<div>
					{"Icons made by "}
					<a href="https://www.flaticon.com/authors/wanicon" title="wanicon">
						wanicon
					</a>
					{" from "}
					<a href="https://www.flaticon.com/" title="Flaticon">
						www.flaticon.com
					</a>
				</div>
			</div>
		</React.Fragment>
	);
}
