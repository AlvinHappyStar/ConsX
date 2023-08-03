import React from "react";
import {
  Box,
  Dialog,
  DialogContent,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from "../style/default";
import { Button_Contained } from "../style/button";

function FormDialog({ open, onClose }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent
        sx={{
          background: "#0D2946",
          borderRadius: "16px",
          border: "1px solid #29426D",
          boxShadow: "0px 4px 20px 5px rgba(0, 0, 0, 0.20)",
        }}
      >
        <Box
          sx={{
            ...DISPLAY_FLEX_ROW,
            ...{
              justifyContent: "space-between",
              alignItems: "center",
            },
          }}
        >
          <Box
            sx={{
              ...DISPLAY_FLEX_COLUMN,
              ...{
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
              },
            }}
          >
            <Box
              sx={{
                ...DISPLAY_FLEX_ROW,
              }}
            >
              <Typography
                sx={{
                  color: "#D704FF",
                  fontFamily: "DM Sans",
                  fontSize: "48px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                }}
              >
                Cons
              </Typography>
              <Typography
                sx={{
                  color: "#00EFFF",
                  fontFamily: "DM Sans",
                  fontSize: "48px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                }}
              >
                X
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "#4675A5",
                fontFamily: "DM Sans",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "22px",
              }}
            >
              Automate Your Curiosity Today
            </Typography>

            <Box
              label="Contact Information*"
              sx={{
                ...DISPLAY_FLEX_COLUMN,
                ...{
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "20px",
                  border: "1px solid #4675A5",
                  padding: "34px 21px",
                  gap: "23px",
                  marginBottom: "30px",
                },
              }}
            >
              <Box
                sx={{
                  ...DISPLAY_FLEX_ROW,
                  ...{
                    width: "100%",
                    justifyContent: "space-between",
                  },
                }}
              >
                <input
                  type="text"
                  placeholder="First Name*"
                  required
                  style={{
                    width: "45%",
                    background: "#092038",
                    borderRadius: "8px",
                    border: "1px solid",
                    color: "#4675A5",
                    fontFamily: "DM Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                    padding: "7.5px",
                  }}
                />

                <input
                  type="text"
                  placeholder="Last Name*"
                  required
                  style={{
                    width: "45%",
                    background: "#092038",
                    borderRadius: "8px",
                    color: "#4675A5",
                    border: "1px solid",
                    fontFamily: "DM Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                    padding: "7.5px",
                  }}
                />
              </Box>

              <Box
                sx={{
                  ...DISPLAY_FLEX_ROW,
                  ...{
                    width: "100%",
                  },
                }}
              >
                <input
                  type="email"
                  placeholder="Email*"
                  required
                  style={{
                    width: "100%",
                    background: "#092038",
                    borderRadius: "8px",
                    border: "1px solid",
                    color: "#4675A5",
                    fontFamily: "DM Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                    padding: "7.5px",
                  }}
                />
              </Box>

              <Box
                sx={{
                  ...DISPLAY_FLEX_ROW,
                  ...{
                    width: "100%",
                    justifyContent: "space-between",
                  },
                }}
              >
                <input
                  type="phone"
                  placeholder="Phone Number*"
                  required
                  style={{
                    width: "60%",
                    background: "#092038",
                    borderRadius: "8px",
                    border: "1px solid",
                    color: "#4675A5",
                    fontFamily: "DM Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                    padding: "7.5px",
                  }}
                />

                <input
                  type="text"
                  placeholder="Country/Region"
                  required
                  style={{
                    width: "30%",
                    background: "#092038",
                    borderRadius: "8px",
                    border: "1px solid",
                    color: "#4675A5",
                    fontFamily: "DM Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                    padding: "7.5px",
                  }}
                />
              </Box>

              <Box
                sx={{
                  ...DISPLAY_FLEX_ROW,
                  ...{
                    width: "100%",
                  },
                }}
              >
                <input
                  type="text"
                  placeholder="Company (if applicable) ?"
                  required
                  style={{
                    width: "100%",
                    background: "#092038",
                    borderRadius: "8px",
                    border: "1px solid",
                    color: "#4675A5",
                    fontFamily: "DM Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                    padding: "7.5px",
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                ...DISPLAY_FLEX_ROW,
                ...{
                  width: "100%",
                  marginBottom: "30px",
                },
              }}
            >
              <input
                type="text"
                placeholder="Target Audience"
                required
                style={{
                  width: "100%",
                  background: "#092038",
                  borderRadius: "8px",
                  border: "1px solid",
                  color: "#4675A5",
                  fontFamily: "DM Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "22px",
                  padding: "7.5px",
                }}
              />
            </Box>

            <Box
              sx={{
                ...DISPLAY_FLEX_ROW,
                ...{
                  width: "100%",
                  marginBottom: "30px",
                },
              }}
            >
              <input
                type="text"
                placeholder="Preferred Research Method"
                required
                style={{
                  width: "100%",
                  background: "#092038",
                  borderRadius: "8px",
                  border: "1px solid",
                  color: "#4675A5",
                  fontFamily: "DM Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "22px",
                  padding: "7.5px",
                }}
              />
            </Box>

            <Box
              sx={{
                ...DISPLAY_FLEX_ROW,
                ...{
                  width: "100%",
                  marginBottom: "30px",
                },
              }}
            >
              <textarea
                type="text"
                placeholder="Additional Comments*"
                required
                style={{
                  width: "100%",
                  background: "#092038",
                  borderRadius: "8px",
                  border: "1px solid",
                  color: "#4675A5",
                  fontFamily: "DM Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "22px",
                  padding: "7.5px",
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              ...DISPLAY_FLEX_COLUMN,
              ...{
                justifyContent: "flex-start",
                alignItems: "end",
                width: "45%",
              },
            }}
          >
            <Box
              label="Business Information*"
              sx={{
                ...DISPLAY_FLEX_COLUMN,
                ...{
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "20px",
                  border: "1px solid #4675A5",
                  padding: "44px 23px",
                  gap: "23px",
                  marginBottom: "30px",
                },
              }}
            >
              <Box
                sx={{
                  ...DISPLAY_FLEX_ROW,
                  ...{
                    width: "100%",
                    marginBottom: "30px",
                  },
                }}
              >
                <input
                  type="text"
                  placeholder="Industry/Market Segment*"
                  required
                  style={{
                    width: "100%",
                    background: "#092038",
                    borderRadius: "8px",
                    border: "1px solid",
                    color: "#4675A5",
                    fontFamily: "DM Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                    padding: "7.5px",
                  }}
                />
              </Box>

              <Box
                sx={{
                  ...DISPLAY_FLEX_ROW,
                  ...{
                    width: "100%",
                    marginBottom: "30px",
                  },
                }}
              >
                <textarea
                  type="text"
                  placeholder="Business Idea/Project Summary*"
                  required
                  style={{
                    width: "100%",
                    background: "#092038",
                    borderRadius: "8px",
                    border: "1px solid",
                    color: "#4675A5",
                    fontFamily: "DM Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                    padding: "7.5px",
                  }}
                />
              </Box>

              <Box
                sx={{
                  ...DISPLAY_FLEX_ROW,
                  ...{
                    width: "100%",
                    marginBottom: "30px",
                  },
                }}
              >
                <select
                  type="text"
                  style={{
                    width: "50%",
                    background: "#092038",
                    borderRadius: "8px",
                    border: "1px solid",
                    color: "#4675A5",
                    fontFamily: "DM Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "22px",
                    padding: "7.5px",
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                ...DISPLAY_FLEX_ROW,
                ...{
                  width: "100%",
                  marginBottom: "30px",
                },
              }}
            >
              <textarea
                type="text"
                placeholder="Research Objectives"
                required
                style={{
                  width: "100%",
                  background: "#092038",
                  borderRadius: "8px",
                  border: "1px solid",
                  color: "#4675A5",
                  fontFamily: "DM Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "22px",
                  padding: "7.5px",
                }}
              />
            </Box>

            <Box
              sx={{
                ...DISPLAY_FLEX_ROW,
                ...{
                  width: "100%",
                  marginBottom: "30px",
                },
              }}
            >
              <input
                type="text"
                placeholder="Competitor Information"
                required
                style={{
                  width: "100%",
                  background: "#092038",
                  borderRadius: "8px",
                  border: "1px solid",
                  color: "#4675A5",
                  fontFamily: "DM Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "22px",
                  padding: "7.5px",
                }}
              />
            </Box>

            <Box
              sx={{
                ...DISPLAY_FLEX_ROW,
                ...{
                  width: "100%",
                  marginBottom: "30px",
                },
              }}
            >
              <input
                type="text"
                placeholder="Timeline and Budget*"
                required
                style={{
                  width: "100%",
                  background: "#092038",
                  borderRadius: "8px",
                  border: "1px solid",
                  color: "#4675A5",
                  fontFamily: "DM Sans",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "22px",
                  padding: "7.5px",
                }}
              />
            </Box>

            <Box
              sx={{
                ...DISPLAY_FLEX_ROW,
                ...{
                  width: "100%",
                  marginBottom: "30px",
                },
              }}
            >
              <input
                type="checkbox"
              />
              <Typography
              sx={{
                color: "#4675A5",
                fontFamily: "DM Sans",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "22px",
                padding: "7.5px",
              }}>Consent and Privacy*</Typography>
            </Box>

            <Box
              sx={{
                ...DISPLAY_FLEX_ROW,
                ...{
                  justifyContent:'center',
                  alignItems: 'center',
                },
              }}
            >
            <Button_Contained>Request a Demo</Button_Contained>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default FormDialog;
